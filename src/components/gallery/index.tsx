'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import image11 from '../../assets/products/image-01.jpg';
import image02 from '../../assets/about-10.jpg';
import image03 from '../../assets/products/image-03.jpg';
import image04 from '../../assets/products/image-04.jpg';
import image05 from '../../assets/products/image-05.jpg';
import image06 from '../../assets/products/image-06.jpg';
import image07 from '../../assets/about-12.jpg';
import image08 from '../../assets/about-08.jpg';
import image09 from '../../assets/about-13.jpg';
import image10 from '../../assets/about-4.jpg';
import image01 from '../../assets/about-5.jpg';
import image12 from '../../assets/about-09.jpg';

export const Gallery = () => {
  const images: StaticImageData[] = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12,
  ];

  const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.2,
      },
    }),
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            onClick={() => setActiveImage(image)}
            className="cursor-pointer"
          >
            <Image
              className="h-80 max-w-80 rounded-lg object-cover"
              src={image}
              alt={`Imagem ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
            onClick={() => setActiveImage(null)}
          >
            <motion.div className="relative">
              <Image
                className="rounded-lg object-contain max-w-full max-h-full"
                src={activeImage}
                alt="Imagem ampliada"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
