import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


    const partnerData = [
        {
          name: 'Kaspersky',
          link: 'http://www.kaspersky.co.in',
          imgSrc: 'https://events.eletsonline.com/nbfc100/chennai/2022/img/kpserry-new.png',
        },
        {
          name: '3i Infotech',
          link: 'https://www.3i-infotech.com',
          imgSrc: 'https://events.eletsonline.com/nbfc100/chennai/2022/img/3i-infotech.png',
        },
        {
          name: 'PayU',
          link: 'https://payu.in',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/PayU.svg',
        },
        
        {
          name: 'Jocata',
          link: 'https://jocata.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/mumbai-2020/wp-content/uploads/sites/6/2020/06/jocata-300x200.png',
        },
        {
          name: 'Cloud4C',
          link: 'https://www.cloud4c.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/chennai-2019/wp-content/uploads/sites/4/2019/07/cloud4c-300x200.png',
        },
        {
          name: 'Trend Micro',
          link: 'https://www.trendmicro.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/chennai-2019/wp-content/uploads/sites/4/2019/06/trend-micro-300x200.png',
        },
        {
          name: 'CRIF',
          link: 'https://www.crif.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/chennai-2019/wp-content/uploads/sites/4/2019/06/crif-300x200.png',
        },
        {
          name: 'Exotel',
          link: 'https://exotel.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/chennai-2019/wp-content/uploads/sites/4/2019/06/exotel-300x200.png',
        },
        {
          name: 'Tata Telebusiness',
          link: 'https://www.tatatelebusiness.com',
          imgSrc: 'https://event.eletsonline.com/nbfc100/delhi-2019/wp-content/uploads/sites/2/2019/03/tata_tele.png',
        },
        // Add more partners here
      ];

      const PastPartners = () => {
        const slickSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
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
          <div id="past-partners" className="lv_click_wrapper">
            <div className="lv_flickr_wrapper lv_toppadder100 lv_bottompadder100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="lv_heading_left">
                      <h2 id="pp">Past Partners</h2>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="lv_flickr_slider flickr-gallery">
                      <Slider {...slickSettings}>
                        {partnerData.map((partner, index) => (
                          <div key={index} className="slickDiv">
                            <a href={partner.link} target="_blank">
                              <img src={partner.imgSrc} alt={partner.name} />
                            </a>
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
      
      export default PastPartners;