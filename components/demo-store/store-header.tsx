'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import CartDrawer from './cart-drawer'

interface StoreHeaderProps {
  storeName: string
  storeSlug: string
}

export default function StoreHeader({ storeName, storeSlug }: StoreHeaderProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const { getItemCount } = useCartStore()
  const itemCount = getItemCount?.() ?? 0

  return (
    <>
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/#ejemplos"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">{storeName ?? ''}</h1>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag size={24} className="text-primary" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        storeSlug={storeSlug}
        storeName={storeName}
      />
    </>
  )
}
