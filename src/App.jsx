import Nav from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
function App() {
  return (
    <div className='gap-3 flex flex-col'>
      <Nav/>
      <Home id="Home" />
      <Projects id="Projects" />
      <Contact id="Contact"/>
      <AboutMe id="AboutMe"/>
      </div>
  )
}

export default App
