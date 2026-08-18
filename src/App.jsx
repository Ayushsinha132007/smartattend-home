import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProductShowcase from "./sections/ProductShowcase";
import Insights from "./sections/Insights";
import HowItWorks from "./sections/HowItWorks";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <Insights />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;