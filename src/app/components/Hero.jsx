'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="  w-full px-6 md:px-16 py-25 bg-[#FEF186]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left: Green Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#B9DDFF] text-black p-8 md:p-12 h-full rounded-3xl space-y-6 shadow-md lg:w-[45vw]"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block bg-white/60 border px-4 py-1 text-sm font-medium rounded-full"
          >
            🧭 Create a life aligned with your highest potential
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Unlock Your <br />
            Purpose, <br />
            Embrace Your Joy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black text-md md:text-lg"
          >
            Together, we'll embark on a transformative journey to identify your true purpose and take consistent, aligned actions towards your goals.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full transition hover:bg-blue-800"
          >
            Book Discovery Session
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative group shadow-md lg:w-[45vw]"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="overflow-hidden rounded-3xl"
          >
            <Image
              src="/MadhuChandrasekaran1.jpeg"
              alt="Madhu Chandrasekaran"
              width={600}
              height={600}
              className="object-cover w-full h-full transition duration-300 ease-in-out"
            />
          </motion.div>

          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <h4 className="font-semibold text-lg">Madhu Chandrasekaran</h4>
            <p className="text-sm">Life Coach and Meditation Trainer</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
