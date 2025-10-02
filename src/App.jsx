import Nav from './components/NavBar'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Footer from './pages/Footer'

function App() {
  return (
    <div className='relative min-h-screen'>
      <ParticleBackground />
      <div className='relative z-10 gap-3 flex flex-col'>
        <Nav/>
        <Home id="Home" />
        <Projects id="Projects" />
        <AboutMe id="AboutMe"/>
        <Footer/>
      </div>
    </div>
  )
}

export default App