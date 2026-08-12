import { motion, useReducedMotion } from "framer-motion";

function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[Tag] || motion.div;

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
