import { MessageCircle } from 'lucide-react';

const menuItems = [
  {
    name: 'Pilau Kuku',
    price: 'TZS 8,000',
    desc: 'Fragrant spiced rice slow-cooked with tender chicken, whole spices, and caramelized onions — a true Tanzanian classic.',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Seller',
  },
  {
    name: 'Mishkaki',
    price: 'TZS 10,000',
    desc: 'Juicy marinated beef skewers grilled over open charcoal, seasoned with a bold blend of East African spices and served with kachumbari.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80',
    tag: 'Chef\'s Pick',
  },
  {
    name: 'Chips Kuku',
    price: 'TZS 7,000',
    desc: 'Golden crispy fries paired with succulent fried chicken, served with a house chili sauce. Comfort food, done the Tanzanian way.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-green-600 text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            What We Serve
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Menu Highlights
          </h2>
          <div className="w-14 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-green-600 font-bold text-base whitespace-nowrap ml-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-gray-500 text-sm leading-relaxed flex-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.desc}
                </p>

                <a
                  href="https://wa.me/255683231771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-700 hover:text-white border border-green-200 hover:border-green-600 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle size={16} />
                  Order This
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
