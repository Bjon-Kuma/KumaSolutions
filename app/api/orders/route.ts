import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

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

    // Determine notification ID based on store
    let notificationId = ''
    if (storeSlug === 'envases-del-puerto') {
      notificationId = process.env.NOTIF_ID_PEDIDO_DEMO_ENVASES_DEL_PUERTO ?? ''
    } else if (storeSlug === 'reposteria-centro') {
      notificationId = process.env.NOTIF_ID_PEDIDO_DEMO_REPOSTERA_CENTRO ?? ''
    }

    // Send email notification
    if (notificationId) {
      const itemsHtml = order?.items?.map?.((item: { product: { name: string }; quantity: number; price: number }) => 
        `<tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item?.product?.name ?? ''}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item?.quantity ?? 0}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${(item?.price ?? 0)?.toFixed?.(0)}</td>
        </tr>`
      )?.join?.('') ?? ''

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #845ec2; border-bottom: 2px solid #845ec2; padding-bottom: 10px;">
            Nuevo Pedido - ${store?.name ?? ''}
          </h2>
          <div style="background: #fbeaff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0;">Datos del cliente:</h3>
            <p style="margin: 5px 0;"><strong>Nombre:</strong> ${customerName ?? ''}</p>
            <p style="margin: 5px 0;"><strong>Teléfono:</strong> <a href="https://wa.me/${String(customerPhone ?? '')?.replace?.(/\D/g, '')}">${customerPhone ?? ''}</a></p>
            ${customerEmail ? `<p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>` : ''}
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
        const appUrl = process.env.NEXTAUTH_URL ?? ''
        const appName = appUrl ? new URL(appUrl)?.hostname?.split?.('.')?.[0] ?? 'Kuma' : 'Kuma'

        await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deployment_token: process.env.ABACUSAI_API_KEY ?? '',
            app_id: process.env.WEB_APP_ID ?? '',
            notification_id: notificationId,
            subject: `Nuevo Pedido - ${store?.name ?? ''} - ${customerName ?? ''}`,
            body: htmlBody,
            is_html: true,
            recipient_email: 'buschiazzomaximiliano3@gmail.com',
            sender_email: appUrl ? `noreply@${new URL(appUrl)?.hostname ?? 'kuma.digital'}` : 'noreply@kuma.digital',
            sender_alias: appName,
          }),
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
