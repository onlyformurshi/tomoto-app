import React from 'react'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>


    </div>
  )
}

export default App
