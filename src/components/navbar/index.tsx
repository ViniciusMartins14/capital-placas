'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logoSvg from '../../assets/icon.svg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface NavbarProps {
  onLinkClick: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  return (
    <motion.nav
      className="flex w-full items-center justify-between"
      variants={fadeIn}
    >
      <Link href="/">
        <Image className="h-12 w-12" src={logoSvg} alt="Logo" />
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <button
          onClick={() => onLinkClick('#services')}
          className="font-medium text-stone-700 hover:text-blue-700 transition-colors"
        >
          Serviços
        </button>
        <button
          onClick={() => onLinkClick('#gallery')}
          className="font-medium px-5 py-3 text-white bg-slate-900 hover:bg-slate-950 transition-colors rounded-full"
        >
          Galeria
        </button>
      </div>
    </motion.nav>
  );
};
