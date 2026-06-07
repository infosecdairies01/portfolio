import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "My Story, Kenny Pothuraju" },
      {
        name: "description",
        content:
          "The personal story of Kenny Pothuraju, from curiosity in cybersecurity to building businesses, products and platforms with long term impact.",
      },
      { property: "og:title", content: "My Story, Kenny Pothuraju" },
      {
        property: "og:description",
        content:
          "A journey shaped by curiosity, learning, cybersecurity and the desire to create meaningful impact.",
      },
    ],
  }),
  component: AboutPage,
});

const easeOut = [0.22, 1, 0.36, 1] as const;

type Chapter = {
  n: string;
  title: string;
  body: string[];
};

const chapters: Chapter[] = [
  {
    n: "01",
    title: "Where It All Started",
    body: [
      "My journey into cybersecurity began with curiosity.",
      "I was fascinated by technology, systems and understanding how things worked behind the scenes.",
      "The more I learned, the more I realized that cybersecurity was not just a field, it was something I genuinely enjoyed.",
      "Countless hours of learning, researching and experimenting slowly transformed a simple curiosity into a passion.",
      "What started as an interest eventually became a purpose.",
    ],
  },
  {
    n: "02",
    title: "The Research Phase",
    body: [
      "I started my journey as a Cybersecurity Researcher.",
      "Research taught me patience, discipline and the importance of continuous learning.",
      "I spent countless hours understanding threats, vulnerabilities and how attackers think.",
      "This phase laid the foundation for everything that followed.",
      "It taught me that growth comes from consistency and curiosity.",
    ],
  },
  {
    n: "03",
    title: "Becoming a SOC Analyst",
    body: [
      "As I transitioned into security operations, I gained hands on experience in monitoring, investigating and responding to security events.",
      "Working as a SOC Analyst gave me a practical understanding of how organizations defend themselves against real world threats.",
      "It transformed knowledge into experience and strengthened my understanding of security operations.",
      "This phase shaped my mindset and taught me the importance of discipline, responsibility and continuous improvement.",
    ],
  },
  {
    n: "04",
    title: "Thinking Beyond a Job",
    body: [
      "Over time, I realized that I wanted to build something bigger than myself.",
      "I wanted to create platforms, products and services that could solve problems and create opportunities for others.",
      "I wasn't interested in simply following a path.",
      "I wanted to create one.",
      "That vision changed everything.",
    ],
  },
  {
    n: "05",
    title: "Building InfosecDairies Private Limited",
    body: [
      "Today, I serve as the Director of InfosecDairies Private Limited.",
      "The company represents more than a business.",
      "It represents the vision of building practical solutions, meaningful products and long term impact.",
      "Through InfosecDairies Private Limited, I continue to focus on cybersecurity, software and innovation.",
    ],
  },
  {
    n: "06",
    title: "Building BlueTeamers",
    body: [
      "BlueTeamers is one of the initiatives I actively lead.",
      "The goal is simple: to create a platform where cybersecurity professionals can learn, practice and grow together.",
      "Building communities and creating opportunities has always been an important part of my journey.",
    ],
  },
  {
    n: "07",
    title: "Building MySocLabs",
    body: [
      "MySocLabs represents the vision of delivering modern managed security services and helping organizations strengthen their security posture.",
      "The focus is on creating practical cybersecurity solutions that provide real value.",
      "Security should not be complicated. It should be effective, accessible and reliable.",
    ],
  },
  {
    n: "08",
    title: "Building KenRoute",
    body: [
      "KenRoute represents my passion for software and problem solving.",
      "The goal behind KenRoute is to simplify transport operations and workflows through technology.",
      "Every product should solve real problems. And KenRoute is being built with that philosophy in mind.",
    ],
  },
  {
    n: "09",
    title: "Leading Multiple Operations",
    body: [
      "Today, I actively lead multiple initiatives across cybersecurity and software.",
      "Every day brings new challenges, ideas and opportunities.",
      "But one thing remains constant: the desire to keep building, learning and creating.",
    ],
  },
];

function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 md:px-12 md:pt-32 md:pb-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
            className="text-[11px] font-medium tracking-[0.34em] text-muted-foreground"
          >
            MY STORY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: easeOut, delay: 0.4 }}
            className="text-display mt-8 max-w-[18ch] text-[3rem] leading-[1.02] tracking-[-0.02em] text-foreground md:text-[5.5rem]"
          >
            From curiosity to building businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.7 }}
            className="mt-10 max-w-2xl text-lg font-light leading-[1.75] text-muted-foreground md:text-xl"
          >
            A journey shaped by curiosity, learning, cybersecurity and the desire to create
            meaningful impact.
          </motion.p>
        </div>
      </section>

      {/* Chapters */}
      <section className="relative px-6 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          {chapters.map((c) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, ease: easeOut }}
              className="border-t border-hairline py-[3rem] md:py-[4.5rem]"
            >
              <p className="text-[11px] font-medium tracking-[0.34em] text-muted-foreground">
                CHAPTER {c.n}
              </p>
              <h2 className="text-display mt-8 max-w-[20ch] text-[2.25rem] leading-[1.05] tracking-[-0.02em] text-foreground md:text-[3.75rem]">
                {c.title}
              </h2>
              <div className="mt-12 max-w-2xl space-y-7">
                {c.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg font-light leading-[1.85] text-muted-foreground md:text-xl"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Final */}
      <section className="relative px-6 py-[5.25rem] md:px-12 md:py-[8.25rem]">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: easeOut }}
            className="text-display max-w-[14ch] text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-foreground md:text-[6rem]"
          >
            Build products.
            <br />
            Create opportunities.
            <br />
            Deliver impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
            className="mt-12 max-w-xl text-lg font-light leading-[1.75] text-muted-foreground md:text-xl"
          >
            This is only the beginning. The journey continues.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
