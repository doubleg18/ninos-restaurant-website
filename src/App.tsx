import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <VisitUs />
      <Footer />
    </div>
  );
}
