import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/2b8c3xR1wK9ue0uU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900"
          >
            Send Beautiful, Handmade Gifts in Minutes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-2xl"
          >
            GiftRush connects you with local artisans to deliver thoughtful, beautifully crafted gifts within minutes or hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex items-center gap-3 w-full max-w-xl">
              <input
                type="text"
                placeholder="Find the perfect gift near you"
                className="flex-1 rounded-full border border-neutral-200/70 bg-white/80 backdrop-blur px-5 py-3 text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="rounded-full px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium shadow-sm hover:shadow-md">
                Shop Now
              </button>
            </div>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { title: 'Choose', text: 'Explore curated gifts from local artisans.' },
              { title: 'We Collect', text: 'We pick up directly from the maker.' },
              { title: 'We Deliver Fast', text: 'Courier to your door in minutes.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-neutral-200/60">
                <p className="text-sm font-semibold text-teal-700">{item.title}</p>
                <p className="text-sm text-neutral-700 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
