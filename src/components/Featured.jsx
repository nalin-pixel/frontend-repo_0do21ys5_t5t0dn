import { motion } from 'framer-motion';
import { Star, Truck, Clock } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Hand-poured Soy Candle',
    price: '$28',
    eta: '25-40 min',
    image: 'https://images.unsplash.com/photo-1602607202436-d1b8db3b7b32?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYW5kLXBvdXJlZCUyMFNveSUyMENhbmRsZXxlbnwwfDB8fHwxNzYyNDExMDYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Artisan Ceramic Mug',
    price: '$36',
    eta: '30-45 min',
    image: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Floral Bouquet by Local Florist',
    price: '$42',
    eta: '20-35 min',
    image: 'https://images.unsplash.com/photo-1761933806648-7eb9f900458d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbG9yYWwlMjBCb3VxdWV0JTIwYnklMjBMb2NhbHxlbnwwfDB8fHwxNzYyNDExMDYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Handmade Chocolate Assortment',
    price: '$32',
    eta: '15-25 min',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Featured() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Featured local artisans & trending gifts</h2>
            <p className="text-neutral-600 mt-2">Hover to feel the craftsmanship. Add to cart in one tap.</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2"><Truck size={16} /> Instant courier</div>
            <div className="flex items-center gap-2"><Clock size={16} /> Real-time ETA</div>
            <div className="flex items-center gap-2"><Star size={16} /> Curated quality</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 text-xs font-medium text-white bg-neutral-900/60 backdrop-blur px-2 py-1 rounded-full">ETA {p.eta}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-teal-700 font-medium">{p.price}</span>
                  <button className="text-sm rounded-full px-3 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
