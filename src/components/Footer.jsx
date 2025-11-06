import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">GiftRush</h3>
            <p className="mt-3 text-neutral-600 max-w-sm">A fast handmade gift delivery platform connecting you with local artisans for thoughtful, beautifully crafted gifts.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#about" className="hover:text-neutral-900">About</a></li>
              <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
              <li><a href="#vendors" className="hover:text-neutral-900">Become a Vendor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Follow us</h4>
            <div className="mt-3 flex items-center gap-3 text-neutral-600">
              <a aria-label="Instagram" href="#" className="hover:text-neutral-900"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="hover:text-neutral-900"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="hover:text-neutral-900"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} GiftRush. All rights reserved.</div>
      </div>
    </footer>
  );
}
