import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const podBoxVariants= {
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

const Pod = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <div style={{ position: 'relative' }} id='agenda' className="lv_ltnews_wrapper popup-news lv_toppadder100 lv_bottompadder100">
      {/* <img src="https://nbfc100.eletsonline.com/images/gg.gif" style={{ position: 'absolute', left: 0, top: 0, maxWidth: '100%' }} alt="" /> */}
      <div className="container">
        <motion.div
              ref={ref}
              className="pod-box row"
              initial="offscreen"
              animate={inView ? 'onscreen' : 'offscreen'}
              variants={podBoxVariants}>
          <div className="col-lg-offset-2 col-md-offset-2 lv_full_width">
            <div className="lv_heading_center">
              <h2 className="text-white">Points of Discussion</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>The Role of AI and ML in Financial Services: Opportunities, Challenges, and Ethical Considerations</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>Integrating AI and automation in Online Dispute Resolution (ODR) processes: Enhancing efficiency and accuracy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>General Data Protection Regulation (GDPR), and beyond: How are global data privacy regulations influencing NBFC practices?</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>The concept of co-lending and its potential benefits for both NBFCs and customers.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>Building a culture of continuous improvement in digital customer experiences within NBFC organizations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="lv_ltnews_box">
              <div className="lv_ltnews_box_details1">
                <p>The Emergence of RegTech: Utilizing Technology for Streamlining Regulatory Compliance Processes.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pod;
