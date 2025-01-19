import Image from 'next/image';

// IMAGES
import image01 from '../../assets/products/image-01.jpg';
import image02 from '../../assets/products/image-02.jpg';
import image03 from '../../assets/products/image-03.jpg';
import image04 from '../../assets/products/image-04.jpg';
import image05 from '../../assets/products/image-05.jpg';
import image06 from '../../assets/products/image-06.jpg';
import image07 from '../../assets/products/image-07.jpg';

const LOGOS = [image01, image02, image03, image04, image05, image06, image07];

export const InfiniteSlider = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[50px] sm:before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[50px] sm:after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(200px*10)] gap-4 sm:w-[calc(300px*10)] md:w-[calc(400px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center w-[200px] sm:w-[300px] md:w-[400px]"
            key={index}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-cover rounded w-full h-[150px] sm:h-[200px] md:h-[300px]"
            />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center w-[200px] sm:w-[300px] md:w-[400px]"
            key={`duplicate-${index}`}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1} duplicado`}
              className="object-cover rounded w-full h-[150px] sm:h-[200px] md:h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
