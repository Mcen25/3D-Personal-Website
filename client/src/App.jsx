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
import TamaTask from "./pages/TamaTask";
import ResearchAssistant from "./pages/ResearchAssistant";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Marquee />
              <ThreeBox />
              <Intro />
              <Skills />
              <BentoGrid />
              <Footer />
            </>
          }
        />
        <Route path="/dga" element={<DGA />} />
        <Route path="/TamaTask" element={<TamaTask />} />
        <Route path="/ResearchAssistant" element={<ResearchAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;