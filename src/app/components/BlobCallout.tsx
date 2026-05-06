'use client';

import { motion } from 'framer-motion';

export default function BlobCallout() {
  return (
    <section className="bg-[#1E3A8A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative bg-[#fff8ea] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 max-w-2xl w-full text-center"
        style={{
          borderRadius: '62% 38% 46% 54% / 55% 48% 52% 45%',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Decorative stars inside blob */}
        <span className="absolute top-6 left-10 text-blue-200 text-xl select-none">★</span>
        <span className="absolute bottom-8 right-10 text-blue-200 text-lg select-none">✦</span>

        <p
          className="text-3xl sm:text-4xl md:text-5xl text-blue-900 leading-snug"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          You built your brand.
        </p>
        <p
          className="text-3xl sm:text-4xl md:text-5xl leading-snug mt-1"
          style={{ fontFamily: 'var(--font-titan)', color: '#C8553D' }}
        >
          Don&apos;t let someone
        </p>
        <p
          className="text-3xl sm:text-4xl md:text-5xl text-blue-900 leading-snug mt-1"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          take it.
        </p>

        <p
          className="mt-6 text-lg sm:text-xl text-blue-500"
          style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
        >
          That&apos;s exactly what Locket is for. ✦
        </p>
      </motion.div>
    </section>
  );
}
