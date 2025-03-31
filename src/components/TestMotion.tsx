import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
    />
  );
}
