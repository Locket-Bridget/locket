'use client';

import { motion } from 'framer-motion';

type StatSectionProps = {
  stat: string;
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  index?: number;
};

const tilts = [-2.5, 2, -1.5];
const stickerRotations = ['-rotate-2', 'rotate-1', '-rotate-1'];
const stickerColors = [
  'bg-blue-900 text-[#fff8ea]',
  'bg-[#fff8ea] text-blue-900 border border-blue-200',
  'bg-[#fce8e3] text-[#C8553D]',
];

export default function StatSection({ stat, title, text, image, reverse = false, index = 0 }: StatSectionProps) {
  const tilt = tilts[index % tilts.length];
  const stickerRotation = stickerRotations[index % stickerRotations.length];
  const stickerColor = stickerColors[index % stickerColors.length];

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center max-w-5xl mx-auto mb-32 gap-16 px-6`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Polaroid-style image */}
      <motion.div
        className="md:w-[45%] flex justify-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Big decorative star behind polaroid */}
        <span className="absolute -top-4 -right-4 text-5xl text-blue-200 select-none pointer-events-none z-0">★</span>
        <div
          className="bg-white p-3 pb-10 shadow-2xl relative z-10"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          <img
            src={image}
            alt={title}
            className="w-72 h-64 object-cover block"
          />
        </div>
        <span className="absolute -bottom-4 -left-2 text-2xl text-blue-100 select-none pointer-events-none z-0">✦</span>
      </motion.div>

      {/* Text content */}
      <div className="md:w-[55%] relative">

        {/* Sticker badge label */}
        <span
          className={`inline-block text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full shadow-sm mb-4 ${stickerRotation} ${stickerColor}`}
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ✦ &nbsp; did you know
        </span>

        {/* Big stat number */}
        <div
          className="text-7xl md:text-8xl font-bold text-blue-900 leading-none mb-3"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          {stat}
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-4 leading-snug" style={{ fontFamily: 'var(--font-fredoka)' }}>
          {title}
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-[2px] bg-blue-300 rounded-full" />
          <span className="text-blue-200 text-xs">★</span>
        </div>

        {/* Body */}
        <p className="text-sm md:text-base text-blue-700/70 leading-relaxed max-w-sm">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
