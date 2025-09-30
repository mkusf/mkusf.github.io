import Nav from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Footer from './pages/Footer'
function App() {
  return (
    <div className='gap-3 flex flex-col'>
      <Nav/>
      <Home id="Home" />
      <Projects id="Projects" />
      <AboutMe id="AboutMe"/>
      <Contact id="Contact"/>
      <Footer/>
      </div>
  )
}

export default App
