import { motion } from "framer-motion";

const FadeInFrom = ({ children, direction = "left", delay = 0 }) => {
  const xOffset = direction === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFrom;
