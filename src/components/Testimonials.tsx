import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Amina Juma',
    location: 'Dar es Salaam',
    rating: 5,
    text: 'The Pilau Kuku at Nino\'s is absolutely incredible — the spices are perfectly balanced and the chicken just falls off the bone. I visit every week and it never disappoints. Best Pilau in Dar!',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80',
  },
  {
    name: 'Hassan Mwangi',
    location: 'Kariakoo, Dar es Salaam',
    rating: 5,
    text: 'Nino\'s Mishkaki is hands down the best I have ever tasted. The charcoal smoke, the marinade, the fresh kachumbari — it all comes together perfectly. My whole family orders from here every weekend!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-green-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-green-200 text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            What Customers Say
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Testimonials
          </h2>
          <div className="w-14 h-1 bg-green-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <Quote size={32} className="text-green-300 mb-4 opacity-60" />
              <p
                className="text-white/90 text-base leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-green-300/40"
                  loading="lazy"
                />
                <div>
                  <p
                    className="text-white font-semibold text-base"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-green-200 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {review.location}
                  </p>
                  <div className="mt-1">
                    <StarRating count={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
