'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CallToAction from '../../components/common/CallToAction';

const phases = [
  {
    title: 'Week 1–2: Foundations of Clarity',
    desc: 'Discover your values and purpose to establish a clear direction. Build a strong foundation for decisions.',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Week 3–4: Mindset Mastery & Resilience',
    desc: 'Break free from limiting beliefs and embrace a resilient, growth-oriented mindset.',
    bg: 'bg-blue-100',
  },
  {
    title: 'Week 5–6: Emotional Intelligence and Team Dynamics',
    desc: 'Enhance self-awareness and navigate team relationships more effectively with empathy.',
    bg: 'bg-green-100',
  },
  {
    title: 'Week 7–8: Agility in Action',
    desc: 'Apply strategies to handle rapid change, reduce uncertainty, and adapt continuously.',
    bg: 'bg-rose-100',
  },
  {
    title: 'Week 9–10: Productivity, Focus, and Flow',
    desc: 'Use Agile tools to reduce distractions and enhance output and flow.',
    bg: 'bg-green-200',
  },
  {
    title: 'Week 11: Stress Management & Well-Being',
    desc: 'Master mindfulness & stress-reduction techniques to thrive under pressure.',
    bg: 'bg-blue-200',
  },
  {
    title: 'Week 12: Integration, Reflection, and Future Growth',
    desc: 'Solidify new habits and align your values with long-term success.',
    bg: 'bg-yellow-200',
  },
];

export default function ChaosToClarity() {
  return (
    <>
      {/* Hero */}
      <section className="bg-rose-100 p-10 rounded-3xl my-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-rose-900">From Chaos to Clarity</h1>
          <p className="text-md font-medium text-rose-800 mb-4">
            My signature program for Agile Corporate to navigate change, find your anchor, and thrive in uncertainty.
          </p>
          <p className="text-gray-700">
            If you’re overwhelmed by change, this 12-week journey helps you build emotional resilience, clarity, and confidence
            in navigating fast-paced work environments.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/ladder-graphic.svg" // change this path to your actual image
            alt="Transformation Steps"
            width={300}
            height={300}
          />
        </div>
      </section>

      {/* Weekly Cards */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
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
