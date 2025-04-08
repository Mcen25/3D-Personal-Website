import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ThreeBox from './components/ThreeBox/ThreeBox'
import Intro from './components/Intro/Intro'
import BentoGrid from './components/BentoGrid/BentoGrid'
import Marquee from './components/Marquee/Marquee'
function App() {

  return (
    <>
      <NavBar />
      <Marquee />
      <ThreeBox />
      <Intro />
      <BentoGrid />
      <Footer />
    </>
  )
}

export default App
