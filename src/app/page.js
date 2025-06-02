import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import CallToAction from './components/common/CallToAction';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <About />
      </section>

      <section>
      <CallToAction
        preheading=""
        heading="Start Your Journey Today"
        description="We are here to help you reach your goals. Sign up for a free consultation today to
discover how we can help you on your journey."
        ctaLabel="Let's Get Started"
        ctaHref="/contact"
        bgColor="#014045"
        ctaBgColor="#EAF475"
      />

      </section>

     
    </>
  );
}
