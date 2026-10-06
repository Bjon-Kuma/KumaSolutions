'use client'

import { motion } from 'framer-motion'

interface Category {
  id: string
  name: string
  slug: string
}

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string | null
  onCategoryChange: (slug: string | null) => void
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onCategoryChange?.(null)}
        className={`px-4 py-2 rounded-full font-medium transition-all ${
          activeCategory === null
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Todos
      </button>
      {categories?.map?.((category) => (
        <motion.button
          key={category?.id ?? ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange?.(category?.slug ?? null)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            activeCategory === category?.slug
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category?.name ?? ''}
        </motion.button>
      )) ?? []}
    </div>
  )
}
