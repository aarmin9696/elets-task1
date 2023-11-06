import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const whyBoxVariants= {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.8,
      duration: 4.0,
    },
  },
};

const Why = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div id="why" className="lv_video_wrapper12 lv_toppadder100 lv_bottompadder100">
      <div className="lv_img_overlay"></div>
      <div className="lv_heading_center">
        <h2 className="text-white">Why attend?</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Congregate and network with decision-makers from the top 100 NBFCs</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Get a closer view of fresh approaches, technologies, best practices, and much more</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Participate in networking sessions, closed-door roundtables, and one-on-one interactions</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Attend and present exclusive technology presentations</p>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Showcase your brand, exhibit, and elevate your business at the expo</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Get featured in the special issue of The Banking & Finance Post magazine</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p> Be the part of curtain raiser for the Elets 4th NBFC100 Leader of Excellence Awards</p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              ref={ref}
              style={{ border: 'none', background: 'none', alignItems: 'flex-end', fontWeight: 600 }}
              className="why-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whyBoxVariants}
            >
              <p style={{ backgroundColor: 'black' }}>&amp; many more</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;