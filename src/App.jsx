import CallToAction from "./components/CallToAction";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integration from "./components/Integration";
import MoreFeatures from "./components/MoreFeatures";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonal from "./components/Testimonal";

function App() {
  return ( 
  <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <MoreFeatures/>
    <Integration/>
    <Faq/>
    <Pricing/>
    <Testimonal/>
    <CallToAction/>
    <Footer/>
    
     {/* <h1 className="text-lg text-green-800">Lets go 🚀</h1> */}
  </div>
  );
}

export default App;
