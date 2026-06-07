import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Ventures } from "@/components/site/Ventures";
import { Expertise } from "@/components/site/Expertise";
import { Contact, Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenny Pothuraju, Director, Cybersecurity Entrepreneur" },
      { name: "description", content: "Building cybersecurity businesses and software products that simplify security and drive impact." },
      { property: "og:title", content: "Kenny Pothuraju" },
      { property: "og:description", content: "Director Cybersecurity Entrepreneur Product Builder" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <section id="ventures" className="-mt-12">
        <Ventures />
      </section>
      <section id="expertise" className="-mt-12">
        <Expertise />
      </section>
      <section id="contact" className="-mt-12">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
