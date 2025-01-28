'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import collabSvg from '../assets/collab.svg';
import whatsAppIcon from '../assets/icon-whatsapp.svg';
import about1 from '../assets/about-1.jpeg';
import about2 from '../assets/identification.jpg';
import adesivo from '../assets/adesivo.jpeg';
import product16 from '../assets/produto-16.jpeg';
import product17 from '../assets/fachada.jpg';
import image09 from '../assets/about-3.jpg';

import { Gallery } from '../components/gallery';
import { Footer } from '../components/footer';
import { Navbar } from '@/components/navbar';
import { useRouter } from 'next/navigation';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface SectionProps {
  title: string;
  description: string;
  image: StaticImageData;
  reverse: boolean;
}

const Section = ({
  section,
  reverse,
}: {
  section: SectionProps;
  reverse: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center mb-16 gap-16 w-full overflow-hidden ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
    >
      <Image
        src={section.image}
        alt={section.title}
        className="w-full sm:h-auto md:h-[400px] object-cover rounded-lg mb-6 md:mb-0 md:w-1/2"
      />

      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-slate-100">
          {section.title}
        </h2>
        <p className="text-xl leading-relaxed text-slate-100 max-w-[500px] text-left">
          {section.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const router = useRouter();

  const sections: SectionProps[] = [
    {
      title: 'Fachadas em ACM',
      description:
        'Fachadas personalizadas para cada estilo. Impacto visual desde a primeira impressão.',
      image: product17,
      reverse: false,
    },
    {
      title: 'Letreiros',
      description:
        'Destaque a fachada do seu negócio com letreiros que impressionam, unindo durabilidade e elegância.',
      image: about1,
      reverse: true,
    },
    {
      title: 'Adesivos',
      description:
        'Personalize qualquer superfície com adesivos de alta qualidade que agregam estilo e identidade visual.',
      image: adesivo,
      reverse: false,
    },
    {
      title: 'Letras caixa',
      description:
        'Versatilidade e estilo para destacar sua marca. As letras que transformam espaços e criam impacto.',
      image: product16,
      reverse: true,
    },
    {
      title: 'Placas de identificação',
      description:
        'Personalize qualquer superfície com adesivos de alta qualidade que agregam estilo e identidade visual.',
      image: about2,
      reverse: false,
    },
    {
      title: 'Neon',
      description:
        'uma forma vibrante de comunicação visual. Crie atmosferas únicas com iluminação em neon.',
      image: image09,
      reverse: true,
    },
  ];

  const handleLinkClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="h-full w-full">
      <motion.section
        id="hero"
        className="mx-auto flex flex-col h-full w-full max-w-screen-xl p-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Navbar onLinkClick={handleLinkClick} />

        <motion.div
          className="flex flex-col-reverse md:flex-row w-full items-center justify-between mt-10"
          variants={fadeIn}
        >
          <motion.div
            className="text-center md:text-left md:w-1/2 space-y-6"
            variants={fadeIn}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-stone-800">
              Crie sua comunicação visual com a{' '}
              <span className="text-slate-100 bg-slate-900 rounded-md px-2 mt-2 inline-block">
                Capital Placas
              </span>
              .
            </h1>
            <p className="text-stone-600 text-lg sm:text-xl">
              Transformamos suas ideias em realidade, com qualidade e
              criatividade.
            </p>
            <Link
              href="https://wa.me/5511989663891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 text-white bg-green-500 hover:bg-green-600 transition-colors rounded-full shadow-lg"
            >
              <Image
                src={whatsAppIcon}
                alt="Ícone WhatsApp"
                className="w-6 h-6"
              />
              Fale conosco
            </Link>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Image
              className="w-full md:max-w-md lg:max-w-lg h-auto"
              src={collabSvg}
              alt="Imagem ilustrativa da criação de uma ideia"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <section id="services" className="bg-slate-950 text-white py-16 px-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-100 text-center mb-12 leading-loose">
          Nossos serviços:
        </h1>
        {sections.map((section, index) => (
          <Section key={index} section={section} reverse={section.reverse} />
        ))}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-100 text-center leading-loose">
          Excelência e dedicação em cada projeto.
        </h1>
        <div className="flex justify-center mt-8">
          <Link
            href="https://wa.me/5511989663891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-white bg-green-500 hover:bg-green-600 transition-colors rounded-md shadow-lg"
          >
            <Image
              src={whatsAppIcon}
              alt="Ícone WhatsApp"
              className="w-6 h-6"
            />
            Orçamento personalizado
          </Link>
        </div>
      </section>

      <section id="gallery">
        <h1 className="text-4xl sm:text-3xl lg:text-4xl font-semibold text-stone-800 text-center mb-12 mt-16 leading-loose">
          Nossos projetos:
        </h1>
        <Gallery />
      </section>

      <Footer />
    </div>
  );
}
