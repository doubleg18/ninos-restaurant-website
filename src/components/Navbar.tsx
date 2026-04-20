import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <span
          className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-green-700' : 'text-white'
          }`}
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          NINO'S
        </span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-green-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/255683231771"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Order Now
        </a>

        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-green-600 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/255683231771"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-2 rounded-full"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
