import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Details from "./components/Details"
import Documents from "./components/Documents"

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Home page - All sections */}
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
            </>
          } />

          {/* Individual pages */}
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/documents" element={<Documents/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
