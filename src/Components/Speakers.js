import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: 'V.P.Nandakumar',
      position: 'Managing Director & CEO',
      company: 'Manappuram Finance Limited',
      image: 'https://nbfc100.eletsonline.com/images/speakers/V.P.Nandakumar-01.png',
    },
    {
      name: 'D S Tripathi',
      position: 'Executive Vice Chairman',
      company: 'Aadhar Housing Finance',
      image: 'https://nbfc100.eletsonline.com/images/speakers/D%20S%20Tripathi-02.png',
    },
    {
      name: 'Gaurav Dugar',
      position: 'General Counsel and EVP',
      company: 'CredAble',
      image: 'https://nbfc100.eletsonline.com/images/speakers/dugar.png',
    },
    {
      name: 'Roopesh Chandran',
      position: 'Chief Operating Officer',
      company: 'BoB Financial Solutions Ltd.',
      image: 'https://nbfc100.eletsonline.com/images/speakers/roop.png',
    },
    {
      name: 'Nishit Shrivastava',
      position: 'Chief Information and Technology Officer',
      company: 'Muthoot Fincorp Ltd.',
      image: 'https://nbfc100.eletsonline.com/images/speakers/nis.png',
    },
    {
      name: 'Nikhil Bandi',
      position: 'Chief Technology, Digital & Operations Officer',
      company: 'APAC Financial Services',
      image: 'https://nbfc100.eletsonline.com/images/speakers/nikhil2.png',
    },
    {
        name: 'Ganesh Vaidya',
        position: 'Chief Technology Officer',
        company: 'SBFC Finance Pvt Ltd.',
        image: 'https://nbfc100.eletsonline.com/images/speakers/gv.png',
      },
      {
        name: 'Ajay Thomas John',
        position: 'Group Chief Digital Officer',
        company: 'Shriram Capital',
        image: 'https://nbfc100.eletsonline.com/images/speakers/thomas.png',
      },
      {
        name: 'Haryyaksha Ghosh',
        position: 'Chief Data Officer',
        company: 'Aadhar Housing Finance',
        image: 'https://nbfc100.eletsonline.com/images/speakers/Haryyaksha%20Ghosh-04.png',
      },
      {
        name: 'Sivakumar Nandipati',
        position: 'Chief Digital Officer',
        company: 'Fedfina',
        image: 'https://nbfc100.eletsonline.com/images/speakers/Sivakumar%20Nandipati-05.png',
      },
      {
        name: 'Jasmine Gupta',
        position: 'Chief Technology Officer',
        company: 'Pahal Financial Services',
        image: 'https://nbfc100.eletsonline.com/images/speakers/jass.png',
      },
      {
        name: 'Anuj Pandey',
        position: 'Chief Risk Officer',
        company: 'U GRO Capital',
        image: 'https://nbfc100.eletsonline.com/images/speakers/Anuj%20Pandey-08.png',
      },
  ];

  return (
    <div id='speakers' className="container-fluid speaker">
      <div className="container">
        <div className="lv_heading_center" style={{ marginTop: '40px' }}>
          <h2>Key Speakers</h2>
        </div>
        <div className="row justify-content-center">
          {speakers.map((speaker, index) => (
            <div key={index} className="col-sm-6 col-md-3">
              <div className="spk">
                <img src={speaker.image} alt={speaker.name} width="100%" />
                <h3>{speaker.name}</h3>
                <p>
                  {speaker.position} <br />
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ textAlign: 'right' }}>&amp; many more...</p>
    </div>
  );
}

export default Speakers;
