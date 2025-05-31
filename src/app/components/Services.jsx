'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Breakthrough Bootcamp',
    description:
      'Find meaning in your work or personal life and break free from stagnation and disappointment.',
    href: '#',
    color: 'bg-green-400',
    hoverColor: 'bg-green-400',
  },
  {
    title: 'Chaos to Clarity',
    description:
      'A high-impact 3-month program designed for agile professionals to navigate change and find clarity.',
    href: '#',
    color: 'bg-yellow-200',
    hoverColor: 'bg-yellow-200',
  },
  {
    title: 'Everyday Bliss',
    description:
      'A mindfulness journey to enhance emotional well-being, mental clarity, and intentional living.',
    href: '#',
    color: 'bg-blue-200',
    hoverColor: 'bg-blue-200',
  },
];

export default function Services() {
  const [bgClass, setBgClass] = useState('');

  return (
    <section
      id="services"
      className={`transition-colors  duration-500 px-6 md:px-16 py-20 ${bgClass || 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12 transition-opacity">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Explore personalized programs designed to help you find clarity, purpose, and lasting joy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:h-[30vw] gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setBgClass(service.color)}
            onMouseLeave={() => setBgClass('')}
          >
            <Link
              href={service.href}
              className={`transition-all duration-300 ${service.color} text-black rounded-3xl p-6 h-full flex flex-col justify-between shadow-sm hover:scale-[1.02]`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-800 text-sm">{service.description}</p>
              </div>
              <div className="mt-6">
                <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:scale-110 transition">
                  <ArrowUpRight size={18} className="text-black" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
