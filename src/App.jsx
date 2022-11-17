import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import ErrorPage from './pages/ErrorPage'

import Menu from './components/Menu'

import './App.css'
import './styles/Menu.css'
import './styles/Home.css'

function App() {
  return (
    <HashRouter>
        <Menu/>
        <Routes>
          <Route path='*' element={<h1>404 Not found</h1>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route>
          <Route path='/skill' element={<Skill/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<ContactMe/>}></Route>
        </Routes>
      </HashRouter>
  )
}

export default App