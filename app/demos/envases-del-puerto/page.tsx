'use client'

import { useState, useEffect } from 'react'
import StoreHeader from '@/components/demo-store/store-header'
import ProductCard from '@/components/demo-store/product-card'
import CategoryFilter from '@/components/demo-store/category-filter'
import { Loader2, Package } from 'lucide-react'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  description: string | null
  price: number
  unit: string
  imageUrl: string | null
}

interface Category {
  id: string
  name: string
  slug: string
  products: Product[]
}

interface Store {
  id: string
  name: string
  slug: string
  description: string | null
  categories: Category[]
}

export default function EnvasesDelPuertoPage() {
  const [store, setStore] = useState<Store | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch('/api/stores/envases-del-puerto')
        const data = await response?.json?.()
        if (data?.success) {
          setStore(data?.store ?? null)
        }
      } catch (error) {
        console.error('Error fetching store:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStore()
  }, [])

  const allProducts = store?.categories?.flatMap?.((cat) => cat?.products ?? []) ?? []
  const filteredProducts = activeCategory
    ? store?.categories?.find?.((cat) => cat?.slug === activeCategory)?.products ?? []
    : allProducts

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    )
  }

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <Package className="text-gray-300 mb-4" size={64} />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tienda no encontrada</h1>
        <p className="text-gray-600">Por favor, verificá que la demo esté configurada correctamente.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreHeader storeName={store?.name ?? 'Envases del Puerto'} storeSlug="envases-del-puerto" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 mb-8 text-white"
        >
          <h1 className="text-3xl font-bold mb-2">{store?.name ?? ''}</h1>
          <p className="opacity-90">{store?.description ?? 'Mayorista de envases y descartables'}</p>
        </motion.div>

        {/* Category filter */}
        <div className="mb-8">
          <CategoryFilter
            categories={store?.categories ?? []}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts?.map?.((product) => (
            <ProductCard
              key={product?.id ?? ''}
              product={product}
              storeSlug="envases-del-puerto"
            />
          )) ?? []}
        </div>

        {filteredProducts?.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">No hay productos en esta categoría</p>
          </div>
        )}
      </main>

      {/* Demo notice */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-primary text-white p-4 rounded-xl shadow-lg z-30">
        <p className="text-sm">
          <strong>Demo:</strong> Esta es una demostración de cómo podría verse tu catálogo.
        </p>
      </div>
    </div>
  )
}
