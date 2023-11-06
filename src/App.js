import './App.css';
import 'bootstrap'; // Import Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Intro from './Components/Intro';
import KeyWrapper from './Components/KeyWrapper';
import Partners from './Components/Partners';
import Speakers from './Components/Speakers';
import Who from './Components/Who';
import Pod from './Components/Pod';
import Why from './Components/Why';
import PastPartners from './Components/PastPartners';
import PastSpeakers from './Components/PastSpeakers';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Magazines from './Components/Magzines';

import Footer from './Components/Footer';
import Nav1 from './Components/Nav1';
import Carousel from './Components/Carousel';
import Gallery1 from './Components/Gallery1';

function App() {
  return (
    <div className="App">
      
      <Nav1 />
      <Carousel />
      <a
        target="_blank"
        href="https://whatsapp.com/channel/0029VaA1WYZBPzjgWE40M71I"
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          zIndex: 2,
        }}
      >
        <img src="https://nbfc100.eletsonline.com/images/174.png" width="90px" alt="" />
      </a>
      <Intro />
      <KeyWrapper />
      <Partners />
      <Speakers />
      <Who />
      <Pod />
      <Why />
      <PastPartners />
      <PastSpeakers />
      {/* <Gallery /> */}
      <Contact />
      <Magazines />
      <Footer />
    </div>
  );
}

export default App;
