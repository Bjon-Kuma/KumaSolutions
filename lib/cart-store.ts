import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  unit: string
  imageUrl?: string
}

interface CartStore {
  items: CartItem[]
  storeSlug: string | null
  addItem: (item: CartItem, storeSlug: string) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      storeSlug: null,

      addItem: (item: CartItem, storeSlug: string) => {
        const state = get()
        // If switching stores, clear cart
        if (state?.storeSlug && state?.storeSlug !== storeSlug) {
          set({ items: [{ ...item, quantity: item?.quantity ?? 1 }], storeSlug })
          return
        }

        const existingItem = state?.items?.find?.((i) => i?.id === item?.id)
        if (existingItem) {
          set({
            items: state?.items?.map?.((i) =>
              i?.id === item?.id
                ? { ...i, quantity: (i?.quantity ?? 0) + (item?.quantity ?? 1) }
                : i
            ) ?? [],
            storeSlug,
          })
        } else {
          set({
            items: [...(state?.items ?? []), { ...item, quantity: item?.quantity ?? 1 }],
            storeSlug,
          })
        }
      },

      removeItem: (id: string) => {
        set((state) => ({
          items: state?.items?.filter?.((i) => i?.id !== id) ?? [],
        }))
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set((state) => ({
          items: state?.items?.map?.((i) =>
            i?.id === id ? { ...i, quantity } : i
          ) ?? [],
        }))
      },

      clearCart: () => {
        set({ items: [], storeSlug: null })
      },

      getTotal: () => {
        const state = get()
        return state?.items?.reduce?.(
          (total, item) => total + (item?.price ?? 0) * (item?.quantity ?? 0),
          0
        ) ?? 0
      },

      getItemCount: () => {
        const state = get()
        return state?.items?.reduce?.((count, item) => count + (item?.quantity ?? 0), 0) ?? 0
      },
    }),
    {
      name: 'kuma-cart-storage',
    }
  )
)
