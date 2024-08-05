import React, { useEffect, useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import LoginPopup from './components/LoginPopup.jsx/LoginPopup';
import Cart from './pages/cart/Cart';
function App() {
  const [loading, setLoading] = useState(true);
  const [loginPopover, setLoginPopover] = useState(false);

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
    <>
      {loginPopover ? <LoginPopup loginPopover={loginPopover} setLoginPopover={setLoginPopover} /> : <></>}
      <div>

        <Container>
          <NavBar loginPopover={loginPopover} setLoginPopover={setLoginPopover} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Container>
        <Footer />


      </div></>
  )
}

export default App
