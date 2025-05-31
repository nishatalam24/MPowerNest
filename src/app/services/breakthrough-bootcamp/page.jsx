'use client';
import Image from 'next/image';
import CallToAction from '../../components/common/CallToAction';
export default function BreakthroughBootcamp() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#EAF475] lg:h-[70vh] p-10 rounded-3xl my-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Breakthrough Bootcamp</h1>
          <p className="font-medium mb-4">
            A self accountable <b>8 week programme</b> for lasting personal transformation
          </p>
          <p className="text-gray-700 font-medium">
            Are you ready to make a significant shift in your life? The Breakthrough Bootcamp is designed for individuals who are committed to creating meaningful and lasting change. Over a span of 8 weeks, we'll work together intensively to clarify your purpose, overcome obstacles, and develop the tools and mindset needed to achieve your goals.
          </p>

          <br />

          <p className='text-gray-700 font-medium'>This programme is perfect for those feeling stuck, seeking greater fulfillment, or navigating major life transitions. Through a combination of deep-dive sessions, personalised action plans, and ongoing support, you'll unlock your potential and create sustainable habits for long-term success.</p>
        </div>
        <div className="flex justify-center">
          {/* <Image
            src="/graphic.png" // replace with correct path
            alt="Transformation Steps"
            width={300}
            height={300}
          /> */}

          
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Sustainable Success', color: 'bg-[#FFB8B2]', desc: 'Create habits and mindsets for long-term growth.' },
            { title: 'Purposeful Living', color: 'bg-[#B9DDFF]', desc: 'Align your actions with your core values.' },
            { title: 'Emotional Resilience', color: 'bg-[#68D391]', desc: 'Navigate challenges with confidence.' },
          ].map((card, i) => (
            <div key={i} className={`${card.color} p-6 rounded-2xl shadow h-[30vh]`}>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bootcamp Includes */}
      <section className="bg-[#015C65] text-white rounded-2xl max-w-6xl  flex-row items-center justify-center gap-[40px] mx-auto my-12 p-8">
        <h3 className="text-xl font-semibold mb-4">Included in your Bootcamp Month(s)</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>8× 60-minute deep-dive sessions</li>
          <li>Pre-session questionnaires</li>
          <li>Personalized action plans</li>
          <li>Email/WhatsApp support between sessions</li>
          <li>Progress tracking & evaluation</li>
        </ul>
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
