import { React, useEffect, useState } from 'react'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import OrderPopup from '../OrderPopup/OrderPopup';

import './HeaderComponent.scss'
import orderService from '../../services/OrderService';

export default function HeaderComponent() {

    const navigate = useNavigate();

    const [showCart, setShowCart] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
      orderService.setCartUpdateHandlers(() => cartUpdatedCallback());
    }, []);

    function showCartToggleHandler(e) {
        e.preventDefault();
        setShowCart(true);
    }

    const navigateHandler = (event, href) => {
        if (window.location.pathname === '/') {
            return;
        }
        if (href === 'contacts' && document.querySelector('#contacts')) {
            return;
        }
        event.preventDefault();
        navigate(href);
    }

    const cartUpdatedCallback = () => {
        setCartItemsCount(orderService.getStorageLength())
    }

    return (
        <>
            <Navbar expand="lg" sticky='top' className='navigation-bar' variant='dark'>
                <Container>
                    <Navbar.Brand onClick={e => navigateHandler(e, '/')} href='/' className='logo-brand'>
                        <img
                            src="/resources/logo.svg"
                            width="114"
                            height="61"
                            className="d-inline-block align-top"
                            alt="You For Ukraine"
                        />
                    </Navbar.Brand>
                    <div className="navbar-group d-small-screen">
                        <Navbar.Brand target={'_blank'} href='https://www.instagram.com/youforukraine/'>
                            <img
                                src="/resources/instagram.svg"
                                className="d-inline-block align-top cart-svg"
                                alt="Our Instagram"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand onClick={showCartToggleHandler} className='cart-icon'>
                            <img
                                src="/resources/cart.svg"
                                className="d-inline-block align-top cart-svg"
                                alt="My Cart"
                            />
                            {cartItemsCount ? <Badge pill bg="primary">{cartItemsCount}</Badge> : ''}
                            <OutsideClickHandler onOutsideClick={() => setShowCart(false)}>
                                <OrderPopup isShown={showCart}/>
                            </OutsideClickHandler>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                        <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto link-list">
                            <Nav.Link onClick={e => navigateHandler(e, 'about-us')} href="/#about-us">About Us</Nav.Link>
                            <Nav.Link href="/#categories">Categories</Nav.Link>
                            <Nav.Link onClick={e => navigateHandler(e, 'delivery')} href="/#delivery">Payment&Shipping</Nav.Link>
                            <Nav.Link onClick={e => navigateHandler(e, 'contacts')} href="#contacts">Contacts</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <div className="navbar-group d-wide-screen">
                            <Navbar.Brand target={'_blank'} href='https://www.instagram.com/youforukraine/'>
                                <img
                                    src="/resources/instagram.svg"
                                    className="d-inline-block align-top cart-svg"
                                    alt="Our Instagram"
                                />
                            </Navbar.Brand>
                            <Navbar.Brand onClick={showCartToggleHandler} className='cart-icon'>
                                <img
                                    src="/resources/cart.svg"
                                    className="d-inline-block align-top cart-svg"
                                    alt="My Cart"
                                />
                                {cartItemsCount ? <Badge pill bg="primary">{cartItemsCount}</Badge> : ''}
                                <OutsideClickHandler onOutsideClick={() => setShowCart(false)}>
                                    <OrderPopup isShown={showCart}/>
                                </OutsideClickHandler>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                </Container>
            </Navbar>
        </>
    )
}
