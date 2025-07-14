'use client';

import { motion } from 'framer-motion';

type StatSectionProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

export default function StatSection({ title, text, image, reverse = false }: StatSectionProps) {
  const slideIn = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center justify-center max-w-6xl mx-auto mb-20 gap-10 px-6`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={slideIn}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-md"
      />
      <div className="md:w-1/2 text-blue-800">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>
    </motion.div>
  );
}
