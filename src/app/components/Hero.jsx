'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect,useRef } from 'react';
export default function Hero() {


 const sectionRef = useRef(null);

  useEffect(() => {
    // Handle initial hash on page load
    if (window.location.hash === '#home' && sectionRef.current) {
      // Add a small delay to ensure proper scrolling after page load
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }

    // Clear hash from URL without triggering scroll
    window.history.replaceState(null, '', window.location.pathname);
  }, []);
  return (
     <section 
      ref={sectionRef}
      id="home" 
      className="w-screen overflow-x-hidden px-6 pb-25 mt-[90px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex lg:flex-row flex-col flex-col-reverse gap-[5px] lg:gap-[10px] items-center"
      >
        {/* Left: Green Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#B9DDFF] text-black p-8 md:p-12 lg:h-[85vh] rounded-3xl space-y-6 shadow-md lg:w-[50vw] ]"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="border border-[1.36px] flex   items-center justify-center px-4 lg:w-[478px] lg:h-[53.400001525878906px] lg:leading-[150%] text-[18px]  py-1 font-medium rounded-full"
          >

            <Image
              src="/glitter.svg"
              alt="MPowerNest Logo"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
Create a life aligned with your highest potential
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[88px] font-[500] leading-tight lg:leading-[100%]"
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
            className="text-[#000000A6] text-md md:text-lg lg:font-[400] lg:text-[20px] font"
          >
            Together, we'll embark on a transformative journey to identify your true purpose and take consistent, aligned actions towards your goals.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-[#EAF475] text-black font-semibold px-6 py-3 rounded-full transition hover:bg-[#D4C94B] lg:text-[17.6px] lg:leading-[150%] font-[500]"
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
  className="rounded-3xl overflow-hidden relative group shadow-md lg:w-[47vw] lg:h-[85vh]" // Increased height
>
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 250 }}
    className="overflow-hidden rounded-3xl h-full border" // Added h-full
  >
    <Image
      src="/MadhuChandrasekaran1.jpeg"
      alt="Madhu Chandrasekaran"
      width={800}  // Increased width
      height={1000} // Increased height
      priority // Added priority loading
      className="object-cover w-full h-full transition duration-300 ease-in-out"
      style={{ objectPosition: 'center' }} // Added explicit object position
    />
  </motion.div>

  <div className="absolute bottom-4 left-4 text-white drop-shadow-md z-10"> 
    <h4 className="font-semibold text-lg">Madhu Chandrasekaran</h4>
    <p className="text-sm">Life Coach and Meditation Trainer</p>
  </div>
</motion.div>
      </motion.div>
    </section>
  );
}
