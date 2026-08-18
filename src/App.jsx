import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import ProductShowcase from "./sections/ProductShowcase";
import Insights from "./sections/Insights";
import HowItWorks from "./sections/HowItWorks";
import FinalCTA from "./sections/FinalCTA";

import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

function HomePage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/signin" element={<SigninPage />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />
    </Routes>
  );
}

export default App;