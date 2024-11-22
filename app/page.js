import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Productivity from "@/components/Productivity";
import Reviews from "@/components/Reviews";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SignupNow from "@/components/SignupNow";

export default function Home() {
  return (
    
     <>
      <Navbar />
      <Hero />
      <Productivity /> 
      <Features />
      <Reviews /> 
      <Pricing /> 
      <SignupNow /> 
      <Footer />
     </>
    
  );
}
