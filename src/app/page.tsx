'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import collabSvg from '../assets/collab.svg';
import whatsAppIcon from '../assets/icon-whatsapp.svg';
import about1 from '../assets/about-1.jpeg';
import product16 from '../assets/produto-16.jpg';
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
        'Elegância, durabilidade e destaque. As fachadas em ACM personalizadas da Capital Placas valorizam a frente do seu negócio e reforçam sua identidade visual com acabamento premium.',
      image: product17,
      reverse: false,
    },
    {
      title: 'Letreiros Luminosos',
      description:
        'Visibilidade em qualquer hora do dia. Produzimos letreiros luminosos modernos, com iluminação em LED e corte sob medida, perfeitos para quem quer atrair olhares e transmitir profissionalismo.',
      image: about1,
      reverse: true,
    },
    {
      title: 'Letras Caixa',
      description:
        'Mais do que um letreiro, uma identidade visual de impacto. Destaque sua marca com acabamento impecável, durabilidade e o design que transforma qualquer espaço.',
      image: product16,
      reverse: false,
    },
    {
      title: 'Placas de Neon',
      description:
        'Transforme seu negócio em um ponto de destaque memorável. As placas de neon da Capital Placas são produzidas sob medida, com cores vibrantes, acabamento premium e instalação profissional, garantindo visibilidade 24 horas.',
      image: image09,
      reverse: true,
    },
  ];

  const handleLinkClick = (href: string) => {
    router.push(href);
  };

  const testimonials = [
    {
      message:
        'Sim, ficou muito bom! Parabéns pelo profissionalismo, entrega no prazo combinado! Muito obrigada!',
      author: 'Cíntia',
    },
    {
      message:
        'Fiz a fachada da minha loja com a Capital Placas, empresa super correta, cumpriu com todos os prazos, excelente acabamento, muito capricho e profissionalismo, e um pronto atendimento excepcional. Recomendo!',
      author: 'Alexandre Miranda',
    },
    {
      message:
        'Demorei muito pra realizar esse sonho, mas a Capital Placas chegou no momento certo! Foram insistentes, cuidadosos e super dedicados. Entregaram mais do que pedi, acabamento impecável! Que Deus abençoe vocês, show!',
      author: 'Aguiarsh Renails',
    },
    {
      message:
        'Trabalho top! Empresa séria, Moacir e Denisy super atenciosos. Recomendo a todos.',
      author: 'Eriton Silva',
    },
    {
      message:
        'Nossa fachada ficou incrível! Confiança em primeiro lugar, trabalho impecável e profissional!',
      author: 'Yasmin O. de Figueiredo',
    },
    {
      message: '',
      author: 'Zeiss Vision Center Ipiranga',
    },
  ];

  const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.75 14.82 9l6.68.57c.68.06.96.91.45 1.35l-5.07 4.3 1.54 6.46c.16.67-.57 1.2-1.16.84L12 19.95l-5.27 2.57c-.6.29-1.32-.18-1.16-.84l1.54-6.46-5.07-4.3c-.51-.43-.23-1.29.45-1.35L9.18 9 12 2.75Z" />
    </svg>
  );

  const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 8h10" />
      <path d="M7 12h7" />
      <path d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4.5L12 21l-2.5-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );

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

      <section id="services" className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Comunicação visual que entrega resultado.
          </h2>
          <p className="text-lg text-slate-200">
            Projetamos, produzimos e instalamos cada peça com o objetivo de fazer
            sua marca se destacar, com estética, qualidade e autoridade.
          </p>
        </div>
        {sections.map((section, index) => (
          <Section key={index} section={section} reverse={section.reverse} />
        ))}
        <div className="flex justify-center mt-12">
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

      <section id="testimonials" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-slate-300 text-sm uppercase tracking-[0.3em]">
            <MessageIcon className="h-5 w-5" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Cada projeto entregue é mais do que um serviço, é um sonho
            realizado.
          </h2>
          <p className="text-lg text-slate-200">
            Confira o que nossos clientes estão dizendo sobre a experiência com
            a Capital Placas Comunicação Visual.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 h-full flex flex-col justify-between gap-6 shadow-2xl shadow-slate-900/40"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon
                    key={`${testimonial.author}-star-${starIndex}`}
                    className="h-5 w-5"
                  />
                ))}
              </div>
              {testimonial.message && (
                <p className="text-lg text-slate-100 leading-relaxed">
                  “{testimonial.message}”
                </p>
              )}
              <div className="pt-4 text-right text-slate-300 font-semibold">
                — {testimonial.author}
              </div>
              {index < testimonials.length - 1 && (
                <span
                  className="block mx-auto h-px w-16 bg-slate-700"
                  aria-hidden
                />
              )}
            </motion.article>
          ))}
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
