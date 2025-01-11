import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </RouterRoutes>
);

export default Routes;