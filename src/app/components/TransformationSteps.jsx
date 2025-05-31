'use client';
import { motion } from 'framer-motion';

export default function TransformationSteps() {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewBox="0 0 300 300"
      className="w-full max-w-xs"
    >
      <g fontSize="10" fontWeight="bold" fill="#000">
        <rect x="60" y="240" width="80" height="40" fill="#D6BCFA" />
        <text x="90" y="265">CLARITY</text>

        <rect x="80" y="190" width="80" height="40" fill="#D6BCFA" />
        <text x="105" y="215">ACTION</text>

        <rect x="100" y="140" width="80" height="40" fill="#D6BCFA" />
        <text x="125" y="165">SUPPORT</text>

        <rect x="120" y="90" width="80" height="40" fill="#D6BCFA" />
        <text x="128" y="115">TRANSFORMATION</text>
      </g>
    </motion.svg>
  );
}
