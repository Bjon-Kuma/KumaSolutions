'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Minus, Plus, Trash2, ShoppingBag, Send } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  storeSlug: string
  storeName: string
}

export default function CartDrawer({ isOpen, onClose, storeSlug, storeName }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart, getTotal } = useCartStore()
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSent, setOrderSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmitOrder = async () => {
    if (!customerName?.trim?.() || !customerPhone?.trim?.()) {
      setError('Por favor completá tu nombre y teléfono')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeSlug,
          customerName: customerName?.trim?.() ?? '',
          customerPhone: customerPhone?.trim?.() ?? '',
          customerEmail: customerEmail?.trim?.() ?? '',
          items: items ?? [],
          total: getTotal?.() ?? 0,
        }),
      })

      const data = await response?.json?.()

      if (data?.success) {
        setOrderSent(true)
        clearCart?.()
        setTimeout(() => {
          setOrderSent(false)
          onClose?.()
          setCustomerName('')
          setCustomerPhone('')
          setCustomerEmail('')
        }, 3000)
      } else {
        setError(data?.message ?? 'Error al enviar el pedido')
      }
    } catch (err) {
      setError('Error al enviar el pedido. Intentá de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const total = getTotal?.() ?? 0
  const itemCount = items?.length ?? 0

  return (
    <Transition.Root show={isOpen ?? false} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose ?? (() => {})}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                      <Dialog.Title className="text-lg font-semibold flex items-center gap-2">
                        <ShoppingBag size={20} className="text-primary" />
                        Tu pedido
                      </Dialog.Title>
                      <button
                        onClick={onClose ?? (() => {})}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {orderSent ? (
                      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4"
                        >
                          <Send className="text-accent" size={32} />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          ¡Pedido enviado!
                        </h3>
                        <p className="text-gray-600">
                          Recibirás una confirmación pronto.
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Cart items */}
                        <div className="flex-1 overflow-y-auto px-4 py-4">
                          {itemCount === 0 ? (
                            <div className="text-center py-12">
                              <ShoppingBag className="mx-auto text-gray-300 mb-4" size={48} />
                              <p className="text-gray-500">Tu carrito está vacío</p>
                            </div>
                          ) : (
                            <AnimatePresence>
                              {items?.map?.((item) => (
                                <motion.div
                                  key={item?.id ?? ''}
                                  layout
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, x: -100 }}
                                  className="flex gap-4 py-4 border-b"
                                >
                                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative shrink-0">
                                    {item?.imageUrl ? (
                                      <Image
                                        src={item.imageUrl}
                                        alt={item?.name ?? ''}
                                        fill
                                        className="object-cover"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <ShoppingBag className="text-gray-300" size={24} />
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-gray-900 truncate">
                                      {item?.name ?? ''}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                      ${item?.price?.toFixed?.(0) ?? '0'} / {item?.unit ?? 'unidad'}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                      <button
                                        onClick={() => updateQuantity?.(item?.id ?? '', (item?.quantity ?? 1) - 1)}
                                        className="p-1 hover:bg-gray-100 rounded"
                                      >
                                        <Minus size={16} />
                                      </button>
                                      <span className="w-8 text-center font-medium">
                                        {item?.quantity ?? 0}
                                      </span>
                                      <button
                                        onClick={() => updateQuantity?.(item?.id ?? '', (item?.quantity ?? 0) + 1)}
                                        className="p-1 hover:bg-gray-100 rounded"
                                      >
                                        <Plus size={16} />
                                      </button>
                                      <button
                                        onClick={() => removeItem?.(item?.id ?? '')}
                                        className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                                      >
                                        <Trash2 size={16} />
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              )) ?? []}
                            </AnimatePresence>
                          )}
                        </div>

                        {/* Footer with form and total */}
                        {itemCount > 0 && (
                          <div className="border-t px-4 py-4 space-y-4">
                            <div className="space-y-3">
                              <input
                                type="text"
                                placeholder="Tu nombre *"
                                value={customerName}
                                onChange={(e) => setCustomerName(e?.target?.value ?? '')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                              <input
                                type="tel"
                                placeholder="Teléfono / WhatsApp *"
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e?.target?.value ?? '')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                              <input
                                type="email"
                                placeholder="Email (opcional)"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e?.target?.value ?? '')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>

                            {error && (
                              <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <div className="flex justify-between items-center py-2">
                              <span className="text-gray-600">Total:</span>
                              <span className="text-2xl font-bold text-primary">
                                ${total?.toFixed?.(0) ?? '0'}
                              </span>
                            </div>

                            <button
                              onClick={handleSubmitOrder}
                              disabled={isSubmitting}
                              className="w-full bg-accent text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                              {isSubmitting ? (
                                'Enviando...'
                              ) : (
                                <>
                                  <Send size={18} />
                                  Enviar pedido
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
