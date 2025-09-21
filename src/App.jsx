import { Routes, Route } from 'react-router-dom'
import Nav from './components/NavBar'
import Home from './components/Home'
function App() {
  return (
    <div className='gap-3 flex flex-col'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </div>
  )
}

export default App
