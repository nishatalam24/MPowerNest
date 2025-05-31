'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction({
  preheading = 'Want To Talk It Over ?',
  heading = 'Journey to Your Best Self',
  description = "Let's chat! Our free call can uncover your needs and see if we're a good fit for each other.",
  ctaLabel = 'Book Discovery Session',
  ctaHref = '/#contact',
  bgColor = '#015C65',         // footer background
  ctaBgColor = '#68D391',      // CTA box background
}) {
  return (
    <footer className={`text-white py-12 px-4 sm:px-6 mt-20 w-full`} style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl px-6 py-12 md:py-16 shadow-lg flex flex-col items-center justify-center w-full"
          style={{ backgroundColor: ctaBgColor }}
        >
          <p className="text-sm text-gray-100 mb-2">{preheading}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-white max-w-xl mx-auto mb-6 text-sm md:text-base">
            {description}
          </p>
          <Link href={ctaHref}>
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-gray-100 transition">
              {ctaLabel}
            </button>
          </Link>
        </motion.div>

        {/* Footer Nav */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="MPowerNest Logo" width={32} height={32} />
            <span className="font-semibold text-white">MPowerNest</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="#services">
              <span className="border px-4 py-2 rounded-full hover:bg-opacity-20 transition cursor-pointer">
                Services
              </span>
            </Link>
            <Link href="#about">
              <span className="border px-4 py-2 rounded-full hover:bg-opacity-20 transition cursor-pointer">
                About Me
              </span>
            </Link>
            <Link href="#contact">
              <span className="border px-4 py-2 rounded-full hover:bg-opacity-20 transition cursor-pointer">
                Contact
              </span>
            </Link>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            <span className="w-4 h-4 rounded-full bg-purple-300"></span>
            <span className="w-4 h-4 rounded-full bg-purple-300"></span>
            <span className="w-4 h-4 rounded-full bg-purple-300"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
