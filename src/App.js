import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Internships from './components/Internships/Internships';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Enroll from './components/Payments/Enroll';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import InternshipPage from './components/InternshipPage/InternshipPage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateInternship from './components/Admin/CreateInternship/CreateInternship';
import AdminInternships from './components/Admin/AdminInternships/AdminInternships';
import Users from './components/Admin/Users/Users';
import Members from './components/Members/Members';
import CampusAmbassador from './components/CampusAmbassador/CampusAmbassador';
import Services from './components/Testimonials/Services';
import ResumeTemplate from './components/ResumeMaker/ResumeEditor';
import ResumeEditor from './components/ResumeMaker/ResumeEditor';
import ResumePage from './components/ResumeMaker/ResumePage';



function App() {
  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
  })
  useEffect(() => {
    // Function to change the title dynamically
    function changeTitle() {
      var titles = [
        "InternPixel: Pixelate Your Career",
        "InternPixel: Ignite Careers",
        "InternPixel: Navigate Success"
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
        <Route path="/internships" element={<Internships />} />
        <Route path="/internship/:id" element={<InternshipPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/98S1u2d3h4a5k6a7rRN54" element={<Members />} />
        <Route path="/ambassadorapply" element={<CampusAmbassador />} />
        <Route path="/workshops" element={<Services />} />
        <Route path="/resumetemplate1" element={<ResumeEditor />} />
        <Route path="/resumemaker" element={<ResumePage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createinternship" element={<CreateInternship />} />
        <Route path="/admin/internships" element={<AdminInternships />} />
        <Route path="/admin/users" element={<Users />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
