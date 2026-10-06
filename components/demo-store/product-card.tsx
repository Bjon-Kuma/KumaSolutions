'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Check, ShoppingBag } from 'lucide-react'
import { useCartStore, CartItem } from '@/lib/cart-store'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description?: string | null
    price: number
    unit: string
    imageUrl?: string | null
  }
  storeSlug: string
}

export default function ProductCard({ product, storeSlug }: ProductCardProps) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product?.id ?? '',
      name: product?.name ?? '',
      price: product?.price ?? 0,
      quantity: 1,
      unit: product?.unit ?? 'unidad',
      imageUrl: product?.imageUrl ?? undefined,
    }
    addItem?.(cartItem, storeSlug)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
    >
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        {product?.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product?.name ?? ''}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="text-gray-300" size={48} />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 truncate">
          {product?.name ?? ''}
        </h3>
        {product?.description && (
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-primary">
              ${product?.price?.toFixed?.(0) ?? '0'}
            </span>
            <span className="text-sm text-gray-500 ml-1">/ {product?.unit ?? 'unidad'}</span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`p-2 rounded-full transition-all ${
              added
                ? 'bg-accent text-white'
                : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {added ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
