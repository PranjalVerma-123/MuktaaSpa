import Navbar from "./components/Navbar";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import ReachUs from "./components/ReachUs";
import Services from "./components/Services";
import Gift from "./components/Gift";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Aryuvedha from "./components/Aryuvedha";
import Naturopathy from "./components/Naturopathy";
import DryTherapy from "./components/DryTherapy";
import Dhara from "./components/Dhara";
import Acupunture from "./components/Acupunture";
import Dhoomra from "./components/Dhoomra";
import Potli from "./components/Potli";
import Lepam from "./components/Lepam";
import Vilepam from "./components/Vilepam";
import Aavaran from "./components/Aavaran";
import Nivaaran from "./components/Nivaaran";
import Royal from "./components/Royal";


function App() {
  return (
    <>
      <div >
      <Router>
        <Navbar/>
            <Routes>
            <Route exact path="/" element={<AboutUs />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/gift" element={<Gift />} />
            <Route exact path="/reachUs" element={<ReachUs />} />
            <Route exact path="/privacy_policy" element={<Privacy />} />
            <Route exact path="/ayurveda" element={ <><Services /> <Aryuvedha /> </>} />
            <Route exact path="/naturopathy" element={ <><Services /> <Naturopathy /> </>} />
            <Route exact path="/dry-therapy" element={ <><Services /> <DryTherapy /> </>} />
            <Route exact path="/dhara" element={ <><Services /> <Dhara /> </>} />
            <Route exact path="/acupuncture" element={ <><Services /> <Acupunture /> </>} />
            <Route exact path="/dhoomra" element={ <><Services /> <Dhoomra /> </>} />
            <Route exact path="/podikizhi" element={ <><Services /> <Potli /> </>} />
            <Route exact path="/lepam" element={ <><Services /> <Lepam /> </>} />
            <Route exact path="/vilepam" element={ <><Services /> <Vilepam /> </>} />
            <Route exact path="/aavaran" element={ <><Services /> <Aavaran /> </>} />
            <Route exact path="/nivaaran" element={ <><Services /> <Nivaaran /> </>} />
            <Route exact path="/royal" element={ <><Services /> <Royal /> </>} />
            </Routes>
            <Footer/>
          </Router>
        
      </div>

    </>
  );
}

export default App;
