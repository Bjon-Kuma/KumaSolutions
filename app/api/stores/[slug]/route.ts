import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params?.slug ?? ''

    const store = await prisma?.store?.findUnique?.({
      where: { slug },
      include: {
        categories: {
          orderBy: { order: 'asc' },
          include: {
            products: {
              orderBy: { name: 'asc' },
            },
          },
        },
      },
    })

    if (!store) {
      return NextResponse.json(
        { success: false, message: 'Tienda no encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      store,
    })
  } catch (error) {
    console.error('Error fetching store:', error)
    return NextResponse.json(
      { success: false, message: 'Error al cargar la tienda' },
      { status: 500 }
    )
  }
}
