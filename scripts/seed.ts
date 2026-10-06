import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.store.deleteMany()

  // Create Envases del Puerto store
  const envasesStore = await prisma.store.create({
    data: {
      slug: 'envases-del-puerto',
      name: 'Envases del Puerto',
      description: 'Mayorista de envases y descartables variados',
      categories: {
        create: [
          {
            name: 'Vasos',
            slug: 'vasos',
            order: 1,
            products: {
              create: [
                {
                  name: 'Vasos Plástico Transparente x100',
                  description: 'Vasos descartables transparentes 250ml',
                  price: 180,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/vasos_plastico_transparente.jpg',
                },
                {
                  name: 'Vasos Telgopor Café x50',
                  description: 'Vasos térmicos para bebidas calientes 180ml',
                  price: 220,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/vasos_telgopor.png',
                },
              ],
            },
          },
          {
            name: 'Contenedores',
            slug: 'contenedores',
            order: 2,
            products: {
              create: [
                {
                  name: 'Viandas Plásticas x25',
                  description: 'Contenedores con tapa para comida',
                  price: 350,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/contenedores_viandas.jpg',
                },
                {
                  name: 'Bandejas Aluminio x10',
                  description: 'Bandejas descartables para horno',
                  price: 280,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/bandejas_aluminio.jpg',
                },
              ],
            },
          },
          {
            name: 'Bolsas',
            slug: 'bolsas',
            order: 3,
            products: {
              create: [
                {
                  name: 'Bolsas Plásticas Medianas x100',
                  description: 'Bolsas para comercio 20x30cm',
                  price: 150,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/bolsas_plastico.png',
                },
              ],
            },
          },
          {
            name: 'Cubiertos',
            slug: 'cubiertos',
            order: 4,
            products: {
              create: [
                {
                  name: 'Set Cubiertos Plásticos x50',
                  description: 'Tenedor, cuchillo y cuchara',
                  price: 200,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/cubiertos_plastico.png',
                },
              ],
            },
          },
          {
            name: 'Servilletas',
            slug: 'servilletas',
            order: 5,
            products: {
              create: [
                {
                  name: 'Servilletas Papel x500',
                  description: 'Servilletas blancas 30x30cm',
                  price: 280,
                  unit: 'pack',
                  imageUrl: '/images/demos/envases/servilletas_papel.png',
                },
              ],
            },
          },
        ],
      },
    },
  })

  console.log('Created store: Envases del Puerto')

  // Create Reposteria Centro store
  const reposteriaStore = await prisma.store.create({
    data: {
      slug: 'reposteria-centro',
      name: 'Repostería Centro',
      description: 'Insumos de repostería: harinas, chocolates, moldes y más',
      categories: {
        create: [
          {
            name: 'Harinas',
            slug: 'harinas',
            order: 1,
            products: {
              create: [
                {
                  name: 'Harina de Trigo 1kg',
                  description: 'Harina 0000 para repostería fina',
                  price: 85,
                  unit: 'kg',
                  imageUrl: '/images/demos/reposteria/harina_trigo.png',
                },
                {
                  name: 'Azúcar Impalpable 500g',
                  description: 'Azúcar glass para decoración',
                  price: 120,
                  unit: 'unidad',
                  imageUrl: '/images/demos/reposteria/azucar_impalpable.png',
                },
              ],
            },
          },
          {
            name: 'Chocolates',
            slug: 'chocolates',
            order: 2,
            products: {
              create: [
                {
                  name: 'Chocolate Cobertura 500g',
                  description: 'Chocolate semi-amargo para derretir',
                  price: 320,
                  unit: 'unidad',
                  imageUrl: '/images/demos/reposteria/chocolate_barra.png',
                },
                {
                  name: 'Chispas de Chocolate 250g',
                  description: 'Chips de chocolate para cookies y muffins',
                  price: 180,
                  unit: 'unidad',
                  imageUrl: '/images/demos/reposteria/chispas_chocolate.png',
                },
              ],
            },
          },
          {
            name: 'Moldes',
            slug: 'moldes',
            order: 3,
            products: {
              create: [
                {
                  name: 'Moldes Silicona Cupcakes x12',
                  description: 'Moldes reutilizables antiadherentes',
                  price: 250,
                  unit: 'set',
                  imageUrl: '/images/demos/reposteria/moldes_silicona.png',
                },
              ],
            },
          },
          {
            name: 'Esencias',
            slug: 'esencias',
            order: 4,
            products: {
              create: [
                {
                  name: 'Esencia de Vainilla 60ml',
                  description: 'Extracto natural de vainilla',
                  price: 95,
                  unit: 'unidad',
                  imageUrl: '/images/demos/reposteria/esencia_vainilla.png',
                },
              ],
            },
          },
          {
            name: 'Decoración',
            slug: 'decoracion',
            order: 5,
            products: {
              create: [
                {
                  name: 'Sprinkles Colores 100g',
                  description: 'Grageas de colores para decorar',
                  price: 85,
                  unit: 'unidad',
                  imageUrl: '/images/demos/reposteria/sprinkles_colores.png',
                },
              ],
            },
          },
        ],
      },
    },
  })

  console.log('Created store: Repostería Centro')
  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
