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
    name: 'Riya Mehta',
    title: 'Product Manager, Bangalore',
    bg: 'bg-green-300',
  },
  {
    image: '/images/client2.jpg',
    intro: 'True shift in mindset and emotional resilience.',
    quote:
      'The mindfulness practices brought me calm amidst corporate chaos. I now approach challenges with grounded clarity.',
    name: 'Aditya Sharma',
    title: 'Agile Coach, Pune',
    bg: 'bg-yellow-200',
  },
  {
    image: '/images/client3.jpg',
    intro: 'Everyday joy, deeply felt.',
    quote:
      'This journey gave me tools to find peace in my daily life. I no longer chase happiness, I live it.',
    name: 'Neha Sinha',
    title: 'Therapist, Delhi',
    bg: 'bg-blue-200',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (!containerRef.current || paused) return;
      containerRef.current.scrollLeft += 1;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Stories of people who unlocked their potential and found peace.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1"
        style={{ scrollBehavior: 'smooth' }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`snap-start rounded-2xl p-6 min-w-[85%] sm:min-w-[50%] md:min-w-[33%] transition-all duration-300 ${t.bg}`}
          >
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
            <blockquote className="italic text-gray-700">“{t.quote}”</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
