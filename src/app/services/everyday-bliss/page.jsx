'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CallToAction from '../../components/common/CallToAction';
import Navbar from '../../components/Navbar';
import TherapyBubbles from '../../components/common/TherapyBubble';
import CatalogCardsWithDynamicBg from '../../components/common/CatlogDynamic';

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

const benefitBoxes = [
  { text: 'Are you a Professional or an Entrepreneur looking to improve focus, productivity, and goal-setting abilities ?', bg: 'bg-green-300' },
  { text: 'Are you a Student or in the learning discipline who want to build mental clarity, resilience, and emotional intelligence ?', bg: 'bg-yellow-200' },
  { text: 'Are you a Parent or a Caregiver who need to cultivate patience, compassion, and inner calm amidst demanding responsibilities ?', bg: 'bg-blue-200' },
  { text: 'Are you a Spiritual person seeking deeper connection with your inner selves or a higher consciousness ?', bg: 'bg-purple-200' },
  { text: 'Are you a Personal Growth Enthusiast who enjoy practices like gratitude journaling, visualization or mindfulness practice ?', bg: 'bg-yellow-300' },
  { text: 'Are you an Individual whose experiencing Stress or Anxiety and looking for a practical method to reduce negative emotions and promote mindfulness ?', bg: 'bg-red-200' },
  { text: 'Are you a beginner and intimidated by traditional meditation ?', bg: 'bg-blue-200' },
];

const benefitBubbles = [
  { label: 'Improved Focus', size: 'w-50 h-50', bg: 'bg-yellow-200', hover: 'bg-yellow-300' },
  { label: 'Stronger Relationships', size: 'w-60 h-60', bg: 'bg-yellow-200', hover: 'bg-orange-200' },
  { label: 'Enhanced Emotional Health', size: 'w-70 h-70', bg: 'bg-yellow-200', hover: 'bg-pink-200' },
  { label: 'Increased Resilience', size: 'w-80 h-80', bg: 'bg-yellow-200', hover: 'bg-green-200' },
];

export default function ChaosToClarity() {
  return (
    <>

    <Navbar />
      {/* Hero */}

      <section className='bg-[#67D392] py-[2px] '>

<section className="bg-[#FFB8B2] mt-[100px] h-[70vh] p-6 md:p-10 rounded-3xl my-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="space-y-4"
  >
    <h1 className="text-4xl font-bold">Everyday Bliss</h1>
    <p className="font-medium font-[600]">
 A <strong>1 week program</strong> to enhance mental clarity, improve emotional well-being, and goal achievement.
    </p>
    {/* <p className="text-gray-700 font-medium">
   Are you feeling overwhelmed by constant change in your personal or professional life? Do you struggle to stay grounded when everything around you seems to be in flux? From Chaos to Clarity is designed for individuals, especially those in corporate environments, who are seeking stability and purpose amidst ongoing transitions.
    </p>
    <p className="text-gray-700 font-medium">
     This program will help you develop the mental agility and emotional resilience needed to not just survive, but thrive in today's fast-paced world. We'll work together to identify your core values, overcome limiting beliefs, and create strategies for maintaining focus and balance, no matter what challenges arise.
    </p>
    <p className="text-gray-700 font-medium">
I encourage you to book a free clarity call with me to discuss your needs and make sure this program is right for you before proceeding.
    </p> */}
  </motion.div>


  <div className="flex justify-center">
    {/* <TransformationSteps /> */}

    <Image
      src="/bubbles.svg" // Update with your actual image path
      alt="Breakthrough Bootcamp Steps"
      width={600}
      height={600}
      className="rounded-2xl object-cover"
    />
  </div>
</section>
      </section>

    {/* <section className="px-6 md:px-16 py-16 bg-white">
      
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
    </section> */}


<section>

 

      <CatalogCardsWithDynamicBg/>
</section>


 <section className=" text-black px-6 py-16 space-y-12">
      {/* Hero Section */}

      {/* Benefit Boxes */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {benefitBoxes.map((item, i) => (
          <div key={i} className={`p-4  shadow text-sm ${item.bg}`}>
            <span className="font-medium">{i + 1}. </span>{item.text}
          </div>
        ))}
      </div> */}


      {/* Benefit Bubbles */}
      {/* <div className="flex flex-wrap justify-center items-center gap-6 pt-10">
        {benefitBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className={`
              ${bubble.size} ${bubble.bg} 
              md:hover:${bubble.hover}
              transition-colors duration-300
              rounded-full flex items-center justify-center text-center font-medium text-sm md:text-base
            `}
          >
            {bubble.label}
          </motion.div>
        ))}
      </div> */}

      <TherapyBubbles/>
    </section>

 

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
