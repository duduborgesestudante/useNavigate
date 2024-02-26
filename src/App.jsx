import './App.css'
import Home from './pages/home'
import { About } from './pages/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>

  )
}

export default App
