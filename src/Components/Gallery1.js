import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';



const Gallery1 = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Enable center mode
    centerPadding: '0',
  };

  const responsiveSettings = [
    {
      breakpoint: 1024, // Change the breakpoint to your desired screen width
      settings: {
        slidesToShow: 1, // Adjust the number of slides to show at this breakpoint
      },
    },
    {
      breakpoint: 768, // Change the breakpoint to your desired screen width
      settings: {
        slidesToShow: 1, // Adjust the number of slides to show at this breakpoint
      },
    },
  ];

  slickSettings.responsive = responsiveSettings;

  const parentDivVariants = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1.1, opacity: 1 },
  };

  const childVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <div>
      <Slider {...slickSettings}>
                  {Array.from({ length: 15 }, (_, i) => (
          <motion.div // Wrap your content with motion.div to apply animations
          key={i}
          className={`gallery gallery-${i + 1}`}
          initial={{ scale: 1, rotate: 0, borderRadius: "0%" }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <img
            src={`https://nbfc100.eletsonline.com/images/gallery/${i + 1}.webp`}
            alt={`Image ${i + 1}`} 
          />
        </motion.div>
        ))}
                </Slider>
    </div>
  );
};

export default Gallery1;
