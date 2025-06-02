'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CallToAction from '../../components/common/CallToAction';
import Navbar from '../../components/Navbar';

// const phases = [
//   {
//     title: 'Week 1–2: Foundations of Clarity',
//     desc: 'Discover your values and purpose to establish a clear direction. Build a strong foundation for decisions.',
//     bg: 'bg-yellow-100',
//   },
//   {
//     title: 'Week 3–4: Mindset Mastery & Resilience',
//     desc: 'Break free from limiting beliefs and embrace a resilient, growth-oriented mindset.',
//     bg: 'bg-blue-100',
//   },
//   {
//     title: 'Week 5–6: Emotional Intelligence and Team Dynamics',
//     desc: 'Enhance self-awareness and navigate team relationships more effectively with empathy.',
//     bg: 'bg-green-100',
//   },
//   {
//     title: 'Week 7–8: Agility in Action',
//     desc: 'Apply strategies to handle rapid change, reduce uncertainty, and adapt continuously.',
//     bg: 'bg-rose-100',
//   },
//   {
//     title: 'Week 9–10: Productivity, Focus, and Flow',
//     desc: 'Use Agile tools to reduce distractions and enhance output and flow.',
//     bg: 'bg-green-200',
//   },
//   {
//     title: 'Week 11: Stress Management & Well-Being',
//     desc: 'Master mindfulness & stress-reduction techniques to thrive under pressure.',
//     bg: 'bg-blue-200',
//   },
//   {
//     title: 'Week 12: Integration, Reflection, and Future Growth',
//     desc: 'Solidify new habits and align your values with long-term success.',
//     bg: 'bg-yellow-200',
//   },
// ];


export const weekCards = [
  {
    week: 'Week 1-2',
    title: 'Foundations of Clarity',
    description: 'Discover your core values and purpose to establish a clear direction in life and work. By aligning your personal goals with Agile principles, you’ll build a solid foundation for decision-making and sustained growth.',
    bg: 'bg-[#F7FA96]',
  },
  {
    week: 'Week 3-4',
    title: 'Mindset Mastery & Resilience',
    description: 'Break free from limiting beliefs and embrace a growth mindset that views challenges as opportunities...',
    bg: 'bg-[#B9DDFF]',
  },
  {
    week: 'Week 5-6',
    title: 'Emotional Intelligence and Team Dynamics',
    description: 'Enhance self-awareness and emotional regulation to navigate complex relationships...',
    bg: 'bg-[#68D391]',
  },
  {
    week: 'Week 7-8',
    title: 'Agility in Action',
    description: 'Develop practical strategies to adapt to rapid change and handle uncertainty with confidence...',
    bg: 'bg-[#FFB8B2]',
  },
  {
    week: 'Week 9-10',
    title: 'Productivity, Focus, and Flow',
    description: 'Learn to prioritize effectively and eliminate distractions using Agile techniques like sprints and retrospectives...',
    bg: 'bg-[#7CE0AE]',
  },
  {
    week: 'Week 11',
    title: 'Stress Management & Well-Being',
    description: 'Master mindfulness and stress-reduction techniques to stay calm and centered...',
    bg: 'bg-[#AED3FF]',
  },
  {
    week: 'Week 12',
    title: 'Integration, Reflection, and Future Growth',
    description: 'Reflect on your progress and solidify new habits for long-term success...',
    bg: 'bg-[#F7FA96]',
  },
];


export default function ChaosToClarity() {
  return (
    <>

    <Navbar />
      {/* Hero */}
{/* <section className="bg-[#B9DDFF] mt-[100px] p-6 md:p-10 rounded-3xl my-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center"> */}
<section 
className="bg-[#B9DDFF] mt-[100px] p-6 md:p-10 rounded-3xl my-10   mx-auto grid md:grid-cols-2 gap-8  

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
    ">From Chaos to Clarity</h1>
    <p className="font-semibold     text-[18px]">
     My signature program for Agile Corporate to navigate change, find your anchor, and thrive in uncertainty.
    </p>
  <p className="text-gray-700 font-medium text-[20px]">
 Are you feeling overwhelmed by constant change in your personal or professional life? Do you struggle to stay grounded when everything around you seems to be in flux? From Chaos to Clarity is designed for individuals, especially those in corporate environments, who are seeking stability and purpose amidst ongoing transitions.
    </p>
    <p className="text-gray-700 font-medium text-[20px]">
     This program will help you develop the mental agility and emotional resilience needed to not just survive, but thrive in today's fast-paced world. We'll work together to identify your core values, overcome limiting beliefs, and create strategies for maintaining focus and balance, no matter what challenges arise.
    </p>
    <p className="text-gray-700 font-medium text-[20px]">
I encourage you to book a free clarity call with me to discuss your needs and make sure this program is right for you before proceeding.
    </p>
  </motion.div>

  <div className="flex justify-center">
    {/* <TransformationSteps /> */}

    <Image
      src="/image.png" // Update with your actual image path
      alt="Breakthrough Bootcamp Steps"
      width={400}
      height={400}
      className="rounded-2xl object-cover"
    />
  </div>
</section>


    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {weekCards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`rounded-2xl p-6 min-h-[240px] transition-colors duration-300 ease-in-out shadow-md text-black ${card.bg} hover:shadow-lg`}
          >
            <h4 className="font-semibold mb-2">{card.week}:</h4>
            <h5 className="font-bold mb-2">{card.title}</h5>
            <p className="text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Weekly Cards */}
      {/* <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Weekly Roadmap</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${phase.bg} p-6 rounded-2xl shadow-sm`}
            >
              <h3 className="font-semibold mb-2 text-gray-800">{phase.title}</h3>
              <p className="text-gray-700 text-sm">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
 */}

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
  );
}
