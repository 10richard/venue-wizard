import Discover from "./components/Discover";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Discover />
      <Pricing />
      <Download />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
