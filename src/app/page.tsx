'use client'

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
import Menu from "@/components/Menu/Menu";
// import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage () {
  return (
    <div>
      <Navigation />
      <main className='pt-10 md:mx-10'>
        <Hero />
        <About />
        <Gallery />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}