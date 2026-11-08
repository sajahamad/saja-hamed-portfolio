import { motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { portfolioData } from "../../data/portfolioData";

const FLOATING_POSITIONS = [
  "-top-3 -left-3 sm:-top-4 sm:-left-6 md:-left-8",
  "-top-3 -right-3 sm:-top-4 sm:-right-6 md:-right-8",
  "-bottom-3 -left-3 sm:-bottom-4 sm:-left-6 md:-left-8",
  "-bottom-3 -right-3 sm:-bottom-4 sm:-right-6 md:-right-8",
];

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PORTRAIT_VARIANTS = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero({ lang }) {
  const { hero, personal, ui } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        variants={CONTAINER_VARIANTS}
      >
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <motion.h1
          variants={ITEM_VARIANTS}
          className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl"
        >
          {hero.title[lang]}
        </motion.h1>

        <motion.p variants={ITEM_VARIANTS} className="-mt-2 text-lg font-semibold text-primary sm:text-xl lg:text-2xl">
          {hero.subtitle[lang]}
        </motion.p>

        <motion.p variants={ITEM_VARIANTS} className="-mt-2 max-w-3xl text-base text-muted sm:text-lg">
          {hero.supportingText[lang]}
        </motion.p>

        <motion.div variants={ITEM_VARIANTS} className="flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href="#work" variant="primary">
            {hero.primaryCTA[lang]}
          </Button>
          <Button as="a" href="#contact" variant="outline">
            {hero.secondaryCTA[lang]}
          </Button>
          <Button as="a" href={personal.cvUrl} target="_blank" rel="noreferrer" download variant="outline">
            <FiDownload size={16} /> {ui.downloadCV[lang]}
          </Button>
        </motion.div>

        <motion.div variants={ITEM_VARIANTS}>
          <SocialLinks />
        </motion.div>

        <motion.div variants={ITEM_VARIANTS} className="flex items-center gap-2 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          <span>{hero.status[lang]}</span>
        </motion.div>

        <motion.div
          variants={PORTRAIT_VARIANTS}
          className="relative mx-auto mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <div
            className="absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-ai/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
            <img
              src={personal.portrait}
              alt={personal.name}
              className="h-full w-full object-cover"
              loading="eager"
            />

            {/* Fades the bottom edge into the page background instead of a hard border */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-background) 0%, transparent 55%)",
              }}
            />

            {/* Fades the left/right edges into the page background instead of a hard border */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-background) 0%, transparent 18%, transparent 82%, var(--color-background) 100%)",
              }}
            />
          </div>

          {hero.floatingBadges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              className={`absolute ${FLOATING_POSITIONS[index % FLOATING_POSITIONS.length]} rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-semibold text-text shadow-lg backdrop-blur-md`}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </Container>
      </motion.div>
    </section>
  );
}

export default Hero;
