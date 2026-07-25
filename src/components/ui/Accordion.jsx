import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={`faq-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-8 sm:py-6"
              >
                <span className="font-display text-base font-semibold text-white sm:text-lg">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-slate-400"
                  aria-hidden="true"
                >
                  <HiChevronDown className="h-5 w-5" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400 sm:px-8 sm:pb-6 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
