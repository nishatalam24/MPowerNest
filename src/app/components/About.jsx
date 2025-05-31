'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const textVariants = {
    collapsed: { height: '6.5rem' },
    expanded: { height: 'auto' },
  };

  return (
    <section id="about" className="bg-gray-50 px-6 md:px-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row flex-col-reverse gap-12 items-center bg-[#FFB8B2] p-8 md:p-12 rounded-3xl shadow-sm"
      >
        {/* Left: Text */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>

          {/* Mobile View: Collapsible Text */}
          <div className="block md:hidden">
            <motion.div
              animate={expanded ? 'expanded' : 'collapsed'}
              variants={textVariants}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden text-gray-700 text-lg leading-relaxed space-y-4"
            >
              <p>
                With over a decade of experience in the corporate world as an Agile Coach and my certification as a Life Coach, I bring a unique perspective to personal growth and transformation. My approach combines the best of both worlds – the adaptability and goal-oriented focus of Agile methodologies with the deep, purpose-driven work of life coaching.
              </p>
              <p>
                As someone who has successfully navigated major life transitions, including moving abroad and shifting career paths, I understand the challenges and opportunities that come with change. My diverse background allows me to connect with clients from all walks of life, helping them unlock their potential and create meaningful, lasting change.
              </p>
              <p>
                I'm passionate about empowering my clients to live in harmony with their authentic selves, overcome limiting beliefs, and adopt empowering thought patterns. Together, we'll work on creating not just external success, but internal fulfillment and joy.
              </p>
            </motion.div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm font-medium underline text-blue-800 transition"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Desktop View: Full Text Always Visible */}
          <div className="hidden md:block text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              With over a decade of experience in the corporate world as an Agile Coach and my certification as a Life Coach, I bring a unique perspective to personal growth and transformation. My approach combines the best of both worlds – the adaptability and goal-oriented focus of Agile methodologies with the deep, purpose-driven work of life coaching.
            </p>
            <p>
              As someone who has successfully navigated major life transitions, including moving abroad and shifting career paths, I understand the challenges and opportunities that come with change. My diverse background allows me to connect with clients from all walks of life, helping them unlock their potential and create meaningful, lasting change.
            </p>
            <p>
              I'm passionate about empowering my clients to live in harmony with their authentic selves, overcome limiting beliefs, and adopt empowering thought patterns. Together, we'll work on creating not just external success, but internal fulfillment and joy.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Image
            src="/MadhuChandrasekaran1.jpeg"
            alt="Madhu Chandrasekaran"
            width={400}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}