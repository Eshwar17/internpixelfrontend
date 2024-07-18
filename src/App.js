import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Internships from './components/Internships/Internships';
import Footer from './components/Layout/Footer/Footer';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/NotFound';
import CommunityComponents from './components/CommunityComponents/CommunityComponents';
import Services from './components/Testimonials/Services';
import ResumeEditor from './components/ResumeMaker/ResumeEditor';
import ResumePage from './components/ResumeMaker/ResumePage';
import CampusAmbassador from './components/CampusAmbassador/CampusAmbassador';

function App() {
  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
  })
  useEffect(() => {
    // Function to change the title dynamically
    function changeTitle() {
      var titles = [
        "GrapplTech: Learn. Hire. Grow.",
        "GrapplTech: Skill up. Hire up. Tech up.",
        "GrapplTech: Don't struggle, Grappl with tech"
      ]; // Array of titles
      var index = 0; // Initial index

      // Function to update the title
      function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length; // Increment the index and loop back to the start
      }

      // Update the title every 2 seconds (2000 milliseconds)
      const intervalId = setInterval(updateTitle, 4000);

      // Clean up the interval on unmounting the component
      return () => clearInterval(intervalId);
    }

    changeTitle();
  }, []);
  
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamps" element={<Internships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gtcommunitycomponents" element={<CommunityComponents />} />
        <Route path="/workshops" element={<Services />} />
        <Route path="/resumetemplate1" element={<ResumeEditor />} />
        <Route path="/resumemaker" element={<ResumePage />} />
        <Route path="/partnerregistration" element={<CampusAmbassador />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
