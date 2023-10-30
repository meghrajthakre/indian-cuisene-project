import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from './components/Recipes.jsx'
import About from "./components/About.jsx"
import Contact from "./components/Contact"
import Community from "./components/Community"
import Masala from "./components/Masala";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Landingpage />} />
          <Route path={"recipes"} element={<Recipes />} />
          <Route path={"masals"} element={<Masala />} />
          <Route path={"aboutus"} element={<About />} />
          <Route path={"contact"} element={<Contact />} />
          <Route path={"community"} element={<Community />} />


        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
