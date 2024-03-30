import {
  Hero,
  About,
  Skills,
  Testimonials,
  Projects,
  Contact,
} from "@/components/sections";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
