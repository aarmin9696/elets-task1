import React from 'react';

const Magazines = () => {
  return (
    <div className="lv_sponsors_wrapper bubble" style={{ paddingBottom: '50px' }}>
      <div className="container par">
        <div className=" col-lg-offset-2 col-md-offset-2">
          <div className="lv_heading_center" style={{ marginTop: '50px' }}>
            <h2 id='black'>Our Magazines</h2>
          </div>
        </div>
        <div className=" cstm">
          <div className="col-md-3">
            <div className="mag" style={{ padding: '20px' }}>
              <a href="https://bfsi.eletsonline.com/magazine-subscription/" target="_blank">
                <img src="https://events.eletsonline.com/revenue/assets/images/mag/bfsi-mag.png" width="100%" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mag" style={{ padding: '20px' }}>
              <a href="https://egov.eletsonline.com/magazine-subscription/" target="_blank">
                <img src="https://events.eletsonline.com/revenue/assets/images/mag/egov.png" width="100%" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mag" style={{ padding: '20px' }}>
              <a href="https://digitallearning.eletsonline.com/magazine-subscription/" target="_blank">
                <img src="https://events.eletsonline.com/revenue/assets/images/mag/dl.jpeg" width="100%" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mag" style={{ padding: '20px' }}>
              <a href="https://ehealth.eletsonline.com/magazine-subscription/" target="_blank">
                <img src="https://events.eletsonline.com/revenue/assets/images/mag/ehealth.jpeg" width="100%" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
