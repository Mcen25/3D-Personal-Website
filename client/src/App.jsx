import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ThreeBox from "./components/ThreeBox/ThreeBox";
import Intro from "./components/Intro/Intro";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Marquee from "./components/Marquee/Marquee";
import Skills from "./components/Skills/Skills";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DGA from "./pages/DGA";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="mx-auto">
                <NavBar />
              </div>
              <div className="mx-auto">
                <Marquee />
              </div>
              <ThreeBox />
              <div className=" mx-auto">
                <Intro />
                <Skills />
                <BentoGrid />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/dga" element={<DGA />} />
        <Route path="/research" />
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;