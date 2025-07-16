//This is where the type + information is fed and created for the landing page sections

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

  const imageZoom = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center justify-center max-w-6xl mx-auto mb-24 gap-10 px-6`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={slideIn}
    >
      {/* Image section with animated zoom */}
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-xl border-4 border-blue-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={imageZoom}
      />

      {/* Text content in a soft box */}
      <div className="md:w-1/2 bg-[#fff8ea] p-8 rounded-lg border-l-4 border-blue-800 shadow-md">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2 text-blue-900">
          <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
          {title}
        </h2>
        <p className="text-lg text-blue-800 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
