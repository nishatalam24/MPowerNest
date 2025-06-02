'use client';
import Image from 'next/image';
import CallToAction from '../../components/common/CallToAction';
import { motion } from 'framer-motion';
import TransformationSteps from '../../components/TransformationSteps';
import Navbar from '../../components/Navbar';
export default function BreakthroughBootcamp() {
  return (
    <>
      {/* Hero Section */}
<Navbar/>
<section 
className="bg-[#EAF475] mt-[100px] p-6 md:p-10 rounded-3xl my-10   mx-auto grid md:grid-cols-2 gap-8  

lg:h-[90vh] lg:w-[95vw] flex flex-col justify-center items-center"
>
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="space-y-4"
  >
    <h1 className="text-4xl 
    font-[500] text-[48px] leading-[100%]
    ">Breakthrough Bootcamp</h1>
    <p className="font-medium 
    text-[20px]
    ">
      A self accountable <strong>8 week programme</strong> for lasting personal transformation
    </p>
    <p className="text-gray-700 font-medium text-[20px]">
      Are you ready to make a significant shift in your life? The Breakthrough Bootcamp is designed for individuals who are committed to creating meaningful and lasting change. Over a span of 8 weeks, we'll work together intensively to clarify your purpose, overcome obstacles, and develop the tools and mindset needed to achieve your goals.
    </p>
    <p className="text-gray-700 font-medium text-[20px]">
     This programme is perfect for those feeling stuck, seeking greater fulfillment, or navigating major life transitions. Through a combination of deep-dive sessions, personalised action plans, and ongoing support, you'll unlock your potential and create sustainable habits for long-term success.
    </p>
  </motion.div>

  <div className="flex justify-center">
    {/* <TransformationSteps /> */}

    <Image
      src="/ladder.svg" // Update with your actual image path
      alt="Breakthrough Bootcamp Steps"
      width={400}
      height={400}
      className="rounded-2xl object-cover"
    />
  </div>
</section>


      {/* Features */}
 <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 md:px-16 py-12">
  {[
    { title: 'Sustainable Success', color: 'bg-[#FFB8B2]', desc: 'Create habits and mindsets for long-term growth.' },
    { title: 'Purposeful Living', color: 'bg-[#B9DDFF]', desc: 'Align your actions with your core values.' },
    { title: 'Emotional Resilience', color: 'bg-[#68D391]', desc: 'Navigate challenges with confidence.' },
  ].map((card, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`${card.color} p-6 rounded-2xl shadow-lg cursor-pointer`}
    >
      <h3 className="font-semibold mb-2">{card.title}</h3>
      <p>{card.desc}</p>
    </motion.div>
  ))}
</div>


      {/* Bootcamp Includes */}

      <section className='px-[10px] md:px-16  bg-white rounded-2xl mx-auto'>

      <section className=" bg-[#015C65] text-white rounded-2xl max-w-6xl lg:flex flex-row items-center justify-center gap-[40px] mx-auto my-12 p-8">
        <h3 className="text-xl font-semibold mb-4">Included in your Bootcamp Month(s)</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>8× 60-minute deep-dive sessions</li>
          <li>Pre-session questionnaires</li>
          <li>Personalized action plans</li>
          <li>Email/WhatsApp support between sessions</li>
          <li>Progress tracking & evaluation</li>
        </ul>
      </section>

      </section>

        <>
      {/* other sections */}
<CallToAction
  preheading="Ready to begin?"
  heading="Start Your Journey Today"
  description="Let's schedule a discovery session to explore your transformation path."
  ctaLabel="Let's Get Started"
  ctaHref="/contact"
  bgColor="#014045"
  ctaBgColor="#68D391"
/>

    </>
    </>
  );
}
