'use client'

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";

export default function HomePage () {
  return (
    <div>
      <Navigation />
      <main className='mt-10'>
        <Hero />
      </main>
    </div>
  );
}