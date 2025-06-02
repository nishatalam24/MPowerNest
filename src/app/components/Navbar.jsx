'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About Me', href: '/#about' },
    { label: 'Contact', href: '/#contact' }, // Placeholder
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-sm px-6 md:px-16 py-4 flex justify-between items-center z-50">

        <a href='/'>

        <div className="text-lg font-semibold text-black flex items-center justify-center gap-[10px]"><Image src="/logo.png" alt="MPowerNest" width={40} height={40} />MPowerNest</div>
        </a>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, i) => (
            <a key={i} href={item.href} className="text-gray-700 hover:text-blue-900 transition font-medium">
              {item.label}
            </a>
          ))}
          <button className="bg-purple-300 px-4 py-2 rounded-full font-medium text-black hover:bg-purple-400 transition">
            Let’s Connect
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center px-6"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="space-y-6 text-center flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-900 transition"
                >
                  {item.label}
                </motion.a>
              ))}
              <button className="mt-6 bg-purple-300 px-6 py-3 rounded-full text-black font-medium hover:bg-purple-400 transition">
                Let’s Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
