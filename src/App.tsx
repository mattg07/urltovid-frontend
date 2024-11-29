import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { PricingSection } from "./Pricing";
import Footer from "./Footer";
function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
      <Footer/>
   </> 
  );
}

export default App;
