import React from 'react';
import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import introPic from "../images/introPic.jpeg"

const Intro = () => {
    return (
        <div id="about" className="lv_click_wrapper">
            <motion.div
                className="lv_about_wrapper lv_bottompadder100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="liner">
                    <motion.h2
                        style={{ color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        India's Premier NBFCs Congregation - <span style={{ color: '#E72426' }}>Empowering Innovations</span>
                    </motion.h2>
                </div>
                <div className="container mt-5">
                    <div className="row cstm5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lv_toppadder50">
                            <div className="lv_heading_left mb-5">
                                <motion.h2
                                    style={{ fontSize: '36px' }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Theme - Advancing the Digital Disruption in NBFCs
                                </motion.h2>
                            </div>
                            <div className="lv_about_info">
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    In today's fast-paced and ever-evolving financial landscape, digital disruptions have
                                    become the driving force behind innovation and growth. The Elets NBFC100 Tech Summit
                                    aims to be at the forefront of this revolution, bringing together industry stalwarts,
                                    thought leaders, technology pioneers, and policy influencers for a day of insightful
                                    discussions, networking, and idea exchange. <br /><br />

                                    Elets Technomedia and The Banking &amp; Finance Post are coming up with the 15th edition of
                                    Elets NBFC100 Tech Summit, India’s longest-running NBFC Congregation. The summit themed
                                    around, “Advancing the Digital Disruptions in NBFCs," promises to be an enlightening and
                                    transformative experience of the NBFC sector.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    <i style={{ fontSize: '24px', paddingRight: '10px' }} className="fa fa-calendar"></i> 11th October, 2023
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    <i style={{ fontSize: '24px', paddingRight: '10px' }} className="fa fa-map-marker"></i> ITC Maratha, Mumbai
                                </motion.p>
                            </div>
                        </div>
                        <motion.div
                            id='middle'
                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lv_toppadder50 "
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <img src="https://eletsonline.com/assets/imgs/collarge-gallery-b-3.png" style={{ maxWidth: '100%', borderRadius: '10px' }} alt="" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Intro;
