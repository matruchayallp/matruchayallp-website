import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import AllLoans from "./pages/AllLoans";
import NotFound from "./pages/NotFound";
import BackgroundVerification from "./pages/BackgroundVerification";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import TrackStatus from "./pages/TrackStatus";
import Contact from "./pages/Contact";
import ApplyNow from "./pages/ApplyNow";
import Services from "./pages/Services";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/all-loans" element={<AllLoans />} />
      <Route path="/background-verification" element={<BackgroundVerification />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/track-status" element={<TrackStatus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<ApplyNow />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
