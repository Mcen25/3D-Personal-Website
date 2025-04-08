import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ThreeBox from './components/ThreeBox/ThreeBox'
import Intro from './components/Intro/Intro'
import BentoGrid from './components/BentoGrid/BentoGrid'
import Marquee from './components/Marquee/Marquee'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DGA from './pages/DGA';

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
              <BentoGrid />
              <Footer />
            </>
          } 
        />
        <Route path="/dga" element={<DGA />} />
      </Routes>
    </Router>
  );
}

export default App;