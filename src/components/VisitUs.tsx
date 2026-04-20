import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 8:00 PM' },
];

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-green-600 text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Find Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Visit Us
          </h2>
          <div className="w-14 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
                <MapPin size={22} className="text-green-600" />
              </div>
              <div>
                <h3
                  className="text-gray-900 font-semibold text-lg mb-1"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Address
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  22 Uporoto Street<br />
                  Dar es Salaam 0022<br />
                  Tanzania
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
                <Clock size={22} className="text-green-600" />
              </div>
              <div>
                <h3
                  className="text-gray-900 font-semibold text-lg mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Opening Hours
                </h3>
                <ul className="space-y-1">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span>{h.day}</span>
                      <span className="text-gray-800 font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
                <Phone size={22} className="text-green-600" />
              </div>
              <div>
                <h3
                  className="text-gray-900 font-semibold text-lg mb-1"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Contact
                </h3>
                <a
                  href="tel:+255683231771"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +255 683 231 771
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/255683231771"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <MessageCircle size={20} fill="currentColor" />
              Order on WhatsApp
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 md:h-full min-h-64">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div
                className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <MapPin size={18} className="text-green-600 shrink-0" />
                <p className="text-gray-800 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  22 Uporoto Street, Dar es Salaam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
