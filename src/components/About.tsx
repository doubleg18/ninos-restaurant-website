import { Leaf, ChefHat, Heart } from 'lucide-react';

const pillars = [
  { icon: Leaf, label: 'Fresh Ingredients', desc: 'Sourced locally every day' },
  { icon: ChefHat, label: 'Expert Chefs', desc: 'Traditional Tanzanian recipes' },
  { icon: Heart, label: 'Made with Love', desc: 'A family tradition since day one' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-green-600 text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Story
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            About Us
          </h2>
          <div className="w-14 h-1 bg-green-500 mx-auto mb-8 rounded-full" />
          <p
            className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            At Nino's Restaurant, we celebrate the rich and vibrant flavors of Tanzania by
            preparing every dish with the freshest local ingredients, straight from the market
            to your plate.{' '}
            <span className="text-gray-800 font-medium">
              From hearty Pilau to smoky Mishkaki, our menu is a love letter to authentic
              Tanzanian cuisine — cooked daily with heart and tradition.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center bg-gray-50 hover:bg-green-50 rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-green-200 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-green-100 group-hover:bg-green-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                <Icon size={26} className="text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3
                className="text-gray-900 font-semibold text-lg mb-1"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {label}
              </h3>
              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
