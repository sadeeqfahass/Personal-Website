import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
