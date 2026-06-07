import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import infosecdairiesLogo from "@/assets/infosecdairies-logo.png";
import kenrouteLogo from "@/assets/kenroute-logo.png";
import blueteamersLogo from "@/assets/blueteamers-logo.png";
import mysoclabsLogo from "@/assets/mysoclabs-logo.png";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Venture = {
  n: string;
  title: string;
  desc: string;
  tag: string;
  bg: string;
  href?: string;
  logo?: string;
  logoWide?: boolean;
  comingSoon?: boolean;
};

const ventures: Venture[] = [
  {
    n: "01",
    title: "InfosecDairies Private Limited",
    desc: "Cybersecurity services and solutions helping organizations strengthen their security posture.",
    tag: "Company",
    bg: "radial-gradient(circle at 20% 20%, #1c1c1c 0%, #050505 65%)",
    href: "https://infosecdairies.io",
    logo: infosecdairiesLogo,
  },
  {
    n: "02",
    title: "BlueTeamers",
    desc: "A platform for blue team professionals to learn, practice and grow together.",
    tag: "Community",
    bg: "linear-gradient(135deg, #141414 0%, #050505 70%)",
    href: "https://blueteamers.io",
    logo: blueteamersLogo,
  },
  {
    n: "03",
    title: "MySocLabs",
    desc: "Managed Security Services Provider (MSSP) delivering modern security operations and cybersecurity solutions.",
    tag: "MSSP",
    bg: "radial-gradient(circle at 75% 30%, #1a1a1a 0%, #050505 70%)",
    href: "https://mysoclabs.com",
    logo: mysoclabsLogo,
  },
  {
    n: "04",
    title: "KenRoute",
    desc: "An intelligent software platform being built to simplify and automate transport and operational workflows.",
    tag: "Software",
    bg: "radial-gradient(circle at 75% 70%, #1a1a1a 0%, #050505 70%)",
    logo: kenrouteLogo,
    logoWide: true,
    comingSoon: true,
  },
];

export function Ventures() {
  return (
    <section id="ventures" className="relative py-[4.5rem] md:py-[6.75rem]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="VENTURES" title={"BUSINESSES\n& PRODUCTS"} />
          <p className="max-w-sm text-base font-light leading-[1.75] text-muted-foreground md:text-right">
            A focused portfolio of cybersecurity and software ventures, each built with discipline, craft and a long horizon.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {ventures.map((v, i) => {
            const isClickable = !v.comingSoon && !!v.href;
            const hasLogoLayout = !!v.logo;
            const commonClass = [
              "group relative block overflow-hidden border border-hairline bg-card transition-[transform,border-color,box-shadow] duration-300 ease-out",
              hasLogoLayout ? "grid min-h-[280px] grid-rows-2 rounded-2xl sm:min-h-[300px]" : "p-6 md:min-h-[230px] md:p-7",
              isClickable
                ? "cursor-pointer hover:scale-[1.02] hover:border-foreground/50 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                : "cursor-not-allowed hover:scale-[1.02] hover:border-foreground/30",
            ].join(" ");

            const contentBlock = (compact = false) => (
              <>
                <h3
                  className={
                    compact
                      ? "text-display text-2xl text-foreground md:text-[1.85rem] md:leading-[1.08]"
                      : "text-display text-3xl text-foreground md:text-[2.4rem] md:leading-[1.05]"
                  }
                >
                  {v.title}
                </h3>
                <p
                  className={
                    compact
                      ? "mt-3 text-sm font-light leading-[1.7] text-muted-foreground md:text-[14px]"
                      : "mt-4 max-w-md text-sm font-light leading-[1.7] text-muted-foreground md:text-[15px]"
                  }
                >
                  {v.desc}
                </p>
                <div
                  className={
                    compact
                      ? "mt-4 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.32em] text-foreground"
                      : "mt-5 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.32em] text-foreground"
                  }
                >
                  {v.comingSoon ? "COMING SOON" : "VISIT WEBSITE"}
                  {!v.comingSoon && (
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </>
            );

            const inner = hasLogoLayout ? (
              <>
                <div className="relative flex max-h-[195px] items-center justify-center overflow-hidden border-b border-hairline/60 bg-[#0a0a0a] p-4 md:max-h-[210px] md:p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: v.bg }}
                  />
                  <img
                    src={v.logo}
                    alt={`${v.title} logo`}
                    className={
                      v.logoWide
                        ? "relative z-10 max-h-[155px] w-full max-w-[310px] object-contain transition-transform duration-500 group-hover:scale-[1.04] md:max-h-[175px] md:max-w-[360px]"
                        : "relative z-10 max-h-[150px] w-full max-w-[240px] object-contain transition-transform duration-500 group-hover:scale-[1.04] md:max-h-[165px] md:max-w-[260px]"
                    }
                  />
                  <span className="absolute right-4 top-4 z-10 text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
                    {v.n}
                  </span>
                  <span className="absolute left-4 top-4 z-10 border border-hairline px-2.5 py-1 text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
                    {v.tag.toUpperCase()}
                  </span>
                </div>

                <div className="relative flex flex-col justify-center p-5 md:p-6">{contentBlock(true)}</div>
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                  style={{ background: v.bg }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-medium tracking-[0.32em] text-muted-foreground">
                      {v.tag.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-3">
                      {v.comingSoon && (
                        <span className="border border-hairline px-2.5 py-1 text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
                          UNDER DEVELOPMENT
                        </span>
                      )}
                      <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">{v.n}</span>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-12">{contentBlock()}</div>
                </div>
              </>
            );

            const motionProps = {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.8, ease: easeOut, delay: i * 0.08 },
            } as const;

            if (isClickable) {
              return (
                <motion.a
                  key={v.n}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${v.title}`}
                  className={commonClass}
                  {...motionProps}
                >
                  {inner}
                </motion.a>
              );
            }
            return (
              <motion.div
                key={v.n}
                role="group"
                aria-disabled="true"
                aria-label={`${v.title}, Coming soon`}
                className={commonClass}
                {...motionProps}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
