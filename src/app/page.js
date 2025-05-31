import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';

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
        <CTA />
      </section>

     
    </>
  );
}
