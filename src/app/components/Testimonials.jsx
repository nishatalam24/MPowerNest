'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './Testimonials.css';
const testimonials = [
  {
    image: '/images/client1.jpg',
    intro: 'Breakthrough transformation, aligned with inner peace.',
    quote:
      'Working with Madhu helped me break cycles of overthinking and find clarity in my purpose. I feel more aligned and emotionally balanced than ever.',
    name: 'Nishat ',
    title: 'Product Manager, Bangalore',
    bg: 'bg-green-300',
  },
  {
    image: '/images/client2.jpg',
    intro: 'True shift in mindset and emotional resilience.',
    quote:
      'The mindfulness practices brought me calm amidst corporate chaos. I now approach challenges with grounded clarity.',
    name: 'Nishat ',
    title: 'Agile Coach, Pune',
    bg: 'bg-yellow-200',
  },
  {
    image: '/images/client3.jpg',
    intro: 'Everyday joy, deeply felt.',
    quote:
      'This journey gave me tools to find peace in my daily life. I no longer chase happiness, I live it.',
    name: 'Nishat ',
    title: 'Therapist, Delhi',
    bg: 'bg-blue-200',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((current) => {
          const next = (current + 1) % testimonials.length;
          scrollToIndex(next);
          return next;
        });
      }
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
 <section id="testimonials" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Stories of people who unlocked their potential and found peace.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex snap-x snap-mandatory overflow-hidden"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex-none w-full md:w-1/2 lg:w-1/3 px-4 transition-all duration-300`}
            >
              <div className={`h-full rounded-2xl p-6 ${t.bg}`}>
                <div className="flex gap-4 items-center mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{t.name}</h4>
                    <p className="text-sm text-gray-800">{t.title}</p>
                  </div>
                </div>
                <p className="font-semibold text-black mb-2">{t.intro}</p>
                <blockquote className="italic text-gray-700">"{t.quote}"</blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
            setActiveIndex(prev);
            scrollToIndex(prev);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={() => {
            const next = (activeIndex + 1) % testimonials.length;
            setActiveIndex(next);
            scrollToIndex(next);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
}
