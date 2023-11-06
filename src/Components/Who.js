import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const whoBoxVariants= {
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

const Who = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <div className="lv_video_wrapper lv_toppadder100 lv_bottompadder100">
      <div className="lv_img_overlay"></div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.76)', padding: '30px' }} className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              ref={ref}
              className="who-box"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={whoBoxVariants}>
              <div className="lv_heading_left">
                <h2 className="text-white ">Who Should Attend?</h2>
              </div>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;Decision Makers - Government &amp; Regulatory Bodies</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;MD, CEO, CIO, CTO and CXOs from NBFCs, MFIs, and HFCs</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;Technology/Solution Providers</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;NBFCs &amp; MFIs Associations</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;NBFC Domain Experts</p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <img src="https://nbfc100.eletsonline.com/images/who.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
