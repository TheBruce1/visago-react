import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Homepage/Home'
import Navbar from './Components/Navbar'
import Pages from './Components/Pages'
import Blog from './Components/Blog'
import Visa from './Components/Visa'
import Contact from './Components/Contact'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/visago-react' elemen{<Home/>}/> */}
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/visa' element={<Visa />}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
