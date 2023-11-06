import React, { useState, useEffect } from 'react';
import Gallery1 from './Gallery1';
import { motion } from 'framer-motion';

const HomeHeader = () => {
  const rotatingText = ['NBFC 100 Tech Summit', 'Banking & Finance', 'Digital Learning', 'Health', 'E-Gov'];
  const animationDuration = 2000; // Animation duration in milliseconds
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
    }, animationDuration);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="home_header_wrapper cstm9 lv_click_wrapper lv_about_wrapper lv_bottompadder100">
      <div
        id="w-node-ee326b97-ef21-b97c-bb06-30cd092136fb-afcbdf12"
        className="home_header_content"
      >
        <motion.h1
          className="heading-style-h3 font-founders-grotesk liner"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <strong>Elets – Promoting Innovations for Nation Building</strong>
        </motion.h1>
        <motion.div className="margin-top margin-medium rotating_wrapper"
         data-w-id="997a5309-8efc-741c-85ac-01d1d21c7129"
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 1.5 }}>
          <div className="title1">We have highlighted innovations role towards the endeavor of building a Knowledge Society through our</div>
          <div className="industries_header_content">
            <div>
              <span className='title'>Elets</span>
              {rotatingText.map((text, i) => (
                <span
                key={i}
                className={`rotatingtext _${i + 1} ${
                  i === currentIndex ? 'active' : ''
                }`}
              >
                {text}
              </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div
        id="w-node-_01d39c58-6c06-9917-b42a-95f557ee5b13-afcbdf12"
        className="home_header_video_wrapper"
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Gallery1 />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHeader;
