'use client';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-20" id="cta">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-[90vw] text-black h-[70vh] flex flex-col items-center justify-center mx-auto bg-[#EAF475]  rounded-3xl p-10 text-center shadow-sm"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Become the Best Version of Yourself
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We are here to help you reach your goals. Sign up for a free consultation today to discover how we can help you on your journey.
        </p>
        <button className="bg-purple-300 hover:bg-purple-400 text-black font-medium px-6 py-3 rounded-full text-lg transition">
          Start Consultation
        </button>
      </motion.div>
    </section>
  );
}
