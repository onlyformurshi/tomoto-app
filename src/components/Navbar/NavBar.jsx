import React, { useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { assets } from "../../assets/assets"
import './NavBar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'
function NavBar() {
    const { totalQuantity } = useContext(StoreContext)
    const [navActive, setNavActive] = useState("home")
    return (
        <Navbar className='NavBar' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home"><img onClick={() => setNavActive("home")} src={assets.logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setNavActive("home")} className={navActive === "home" ? "active" : ''}>Home</Nav.Link>
                        <Nav.Link onClick={() => setNavActive("menu")} className={navActive === "menu" ? "active" : ''}>Menu</Nav.Link>
                        <Nav.Link onClick={() => setNavActive("mobile_app")} className={navActive === "mobile_app" ? "active" : ''}>Mobile app</Nav.Link>
                        <Nav.Link onClick={() => setNavActive("Contact")} className={navActive === "Contact" ? "active" : ''} >Contact us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => setNavActive("search")} className={`me-4 ${navActive === "search" ? "active" : ''}`}><img src={assets.search_icon} alt="" /></Nav.Link>
                        <Nav.Link as={Link} to="/cart" onClick={() => setNavActive("cart")} className={`me-4 navbar_cart ${navActive === "cart" ? "active" : ''}`}><img src={assets.basket_icon} alt="" />
                            {totalQuantity ?
                                <div className="dot">
                                    {totalQuantity}
                                </div> : null}
                        </Nav.Link>
                        <button>Sign-In</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;