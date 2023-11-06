import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const speakersData = [
  {
    name: 'Alok Aggrawal',
    position: 'Managing Director & CEO',
    company: 'National Trust Housing',
    imgSrc: 'https://eletsonline.com/assets/img/Alok_Aggarwal.png',
  },
  {
    name: 'Nirav Choksi',
    position: 'Co-Founder & CEO',
    company: 'CredAble',
    imgSrc: 'https://eletsonline.com/assets/img/Nirav.png',
  },
  {
    name: 'P K Sinha',
    position: 'Executive Director',
    company: 'Power Finance Corporation Ltd',
    imgSrc: 'https://event.eletsonline.com/nbfc100/mumbai/images-event/team/pk_sinha.png',
  },
  {
    name: 'Steve Hardgrave',
    position: 'CEO, Co-Founder',
    company: 'Varthana',
    imgSrc: 'https://eletsonline.com/assets/img/steve_hardgrave.png',
  },
  {
    name: 'Rahul Gupta',
    position: 'Chief Executive Officer',
    company: 'Avanti Finance',
    imgSrc: 'https://eletsonline.com/assets/img/nbfc-30-09-s4.png',
  },
  // Add more speaker data here
];

const PastSpeakers = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const responsiveSettings = [
    {
      breakpoint: 1024, // Change the breakpoint to your desired screen width
      settings: {
        slidesToShow: 2, // Adjust the number of slides to show at this breakpoint
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

  return (
    <div className="lv_click_wrapper">
      <div id="past-speakers" className="lv_event_glry_wrapper lv_toppadder100 lv_bottompadder100">
        <div className="lv_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-2 col-md-offset-2">
              <div className="lv_heading_center">
                <h2>Past Speakers</h2>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="lv_glry_slider popup-gallery">
                <Slider {...slickSettings}>
                  {speakersData.map((speaker, index) => (
                    <div key={index} className="item">
                      <div className="past-speakers">
                        <img src={speaker.imgSrc} width="100%" alt={speaker.name} />
                        <h3 className='golden'>{speaker.name}</h3>
                        <p className='golden'>
                          {speaker.position}
                          <br />
                          {speaker.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
