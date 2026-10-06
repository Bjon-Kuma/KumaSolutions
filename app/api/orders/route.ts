import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const data = await request?.json?.()

    const { storeSlug, customerName, customerPhone, customerEmail, items, total } = data ?? {}

    if (!storeSlug || !customerName || !customerPhone || !items?.length) {
      return NextResponse.json(
        { success: false, message: 'Faltan datos requeridos' },
        { status: 400 }
      )
    }

    // Find the store
    const store = await prisma?.store?.findUnique?.({
      where: { slug: storeSlug },
    })

    if (!store) {
      return NextResponse.json(
        { success: false, message: 'Tienda no encontrada' },
        { status: 404 }
      )
    }

    // Create the order
    const order = await prisma?.order?.create?.({
      data: {
        storeId: store?.id ?? '',
        customerName: customerName ?? '',
        customerPhone: customerPhone ?? '',
        customerEmail: customerEmail ?? '',
        total: total ?? 0,
        items: {
          create: items?.map?.((item: { id: string; quantity: number; price: number }) => ({
            productId: item?.id ?? '',
            quantity: item?.quantity ?? 1,
            price: item?.price ?? 0,
          })) ?? [],
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    // Send email notification (only when SMTP is configured)
    if (process.env.SMTP_HOST) {
      const itemsHtml = order?.items?.map?.((item: { product: { name: string }; quantity: number; price: number }) =>
        `<tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(item?.product?.name)}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item?.quantity ?? 0}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${(item?.price ?? 0)?.toFixed?.(0)}</td>
        </tr>`
      )?.join?.('') ?? ''

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #845ec2; border-bottom: 2px solid #845ec2; padding-bottom: 10px;">
            Nuevo Pedido - ${escapeHtml(store?.name)}
          </h2>
          <div style="background: #fbeaff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0;">Datos del cliente:</h3>
            <p style="margin: 5px 0;"><strong>Nombre:</strong> ${escapeHtml(customerName)}</p>
            <p style="margin: 5px 0;"><strong>Teléfono:</strong> <a href="https://wa.me/${String(customerPhone ?? '')?.replace?.(/\D/g, '')}">${escapeHtml(customerPhone)}</a></p>
            ${customerEmail ? `<p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(customerEmail)}">${escapeHtml(customerEmail)}</a></p>` : ''}
          </div>
          <h3>Productos:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f5f5f5;">
                <th style="padding: 10px; text-align: left;">Producto</th>
                <th style="padding: 10px; text-align: center;">Cantidad</th>
                <th style="padding: 10px; text-align: right;">Precio</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #00c9a7; color: white; border-radius: 8px; text-align: right;">
            <strong style="font-size: 18px;">Total: $${(total ?? 0)?.toFixed?.(0)}</strong>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Pedido ID: ${order?.id ?? ''}<br>
            Fecha: ${new Date().toLocaleString('es-UY')}
          </p>
        </div>
      `

      try {
        const port = Number(process.env.SMTP_PORT ?? 465)
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port,
          secure: port === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: `"KUMA Solutions" <${process.env.SMTP_USER}>`,
          to: process.env.ORDER_NOTIFY_EMAIL || process.env.SMTP_USER,
          replyTo: customerEmail || undefined,
          subject: `Nuevo Pedido - ${store?.name ?? ''} - ${customerName ?? ''}`,
          html: htmlBody,
        })
      } catch (emailError) {
        console.error('Error sending email notification:', emailError)
        // Don't fail the order if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Pedido enviado correctamente',
      orderId: order?.id ?? '',
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, message: 'Error al procesar el pedido' },
      { status: 500 }
    )
  }
}
