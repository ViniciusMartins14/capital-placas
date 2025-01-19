import Image from 'next/image';
import logoSvg from '../../assets/icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 shadow mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={logoSvg}
                className="h-10 w-10"
                alt="Capital Placas Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Capital Placas
              </span>
            </a>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://www.instagram.com/capitalplacas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572489141302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <Image src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#services" className="hover:underline me-4 md:me-6">
                Serviços
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511989663891"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          <p>Endereço: Rua estrada velha da Penha 346 - 03090-020</p>
          <p>
            Email:{' '}
            <a
              href="mailto:capitalplacas23@gmail.com "
              className="hover:underline"
            >
              capitalplacas23@gmail.com
            </a>
          </p>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <a href="https://warement.dev/" className="hover:underline">
            Capital Placas
          </a>
          . Todos direitos reservados
        </span>
      </div>
    </footer>
  );
};
