import './App.css'
import { Backdrop_path } from './components/Backdrop_path'
import { Navbar } from './components/Header'
import { Homepage } from './pages/Homepage'

function App() {

  return (
    <>
      <Navbar />
      <Backdrop_path />
      <Homepage />
    </>
  )
}

export default App
