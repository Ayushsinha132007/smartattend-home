import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ProductShowcase from "./sections/ProductShowcase";
import Insights from "./sections/Insights";
import HowItWorks from "./sections/HowItWorks";
import FinalCTA from "./sections/FinalCTA";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <Insights />
        <HowItWorks />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;