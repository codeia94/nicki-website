'use client'

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
// import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage () {
  return (
    <div>
      <Navigation />
      <main className='pt-10'>
        <Hero />
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}