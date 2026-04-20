import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-3 inline-block">
          <span
            className="text-green-400 text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Welcome to
          </span>
        </div>

        <h1
          className="text-white leading-none mb-2"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          <span className="block text-6xl sm:text-8xl md:text-9xl font-bold tracking-wider uppercase drop-shadow-2xl">
            NINO'S
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mt-1"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Restaurant
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest text-white/90 mt-2 uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Tanzania
          </span>
        </h1>

        <div className="w-20 h-1 bg-green-500 mx-auto my-6 rounded-full" />

        <p
          className="text-white/85 text-lg sm:text-xl md:text-2xl font-light mb-10 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Serving fresh, delicious Tanzanian dishes daily
        </p>

        <a
          href="https://wa.me/255683231771"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <MessageCircle size={22} fill="currentColor" />
          Order on WhatsApp
        </a>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="text-white/60 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
