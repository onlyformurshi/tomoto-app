import React,{ useEffect, useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other loading task
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Container>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
      <Footer />


    </div>
  )
}

export default App
