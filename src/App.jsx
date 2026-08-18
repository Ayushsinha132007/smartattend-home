import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProductShowcase from "./sections/ProductShowcase";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
      </main>
    </>
  );
}

export default App;