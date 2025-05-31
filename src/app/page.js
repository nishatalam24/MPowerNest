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
        preheading="Ready to begin?"
        heading="Start Your Journey Today"
        description="Let's schedule a discovery session to explore your transformation path."
        ctaLabel="Let's Get Started"
        ctaHref="/contact"
        bgColor="#014045"
        ctaBgColor="#68D391"
      />

      </section>

     
    </>
  );
}
