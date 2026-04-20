import { MessageCircle, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <span
                className="text-3xl font-bold text-green-400 tracking-wider"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                NINO'S
              </span>
              <span
                className="block text-lg text-white/70 mt-0.5"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                Restaurant Tanzania
              </span>
            </div>
            <p
              className="text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Serving fresh, delicious Tanzanian dishes daily. Taste the heart of Tanzania in every bite.
            </p>
          </div>

          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  22 Uporoto Street, Dar es Salaam 0022, Tanzania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 shrink-0" />
                <a
                  href="tel:+255683231771"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +255 683 231 771
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/255683231771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle size={15} fill="currentColor" />
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            &copy; 2026 Nino's Restaurant Tanzania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
