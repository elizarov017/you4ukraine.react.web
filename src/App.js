import './App.scss';
import React, { useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/Header/HeaderComponent'
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ItemPage from './pages/ItemPage/ItemPage';
import WebFont from 'webfontloader';
import './index.scss'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PaymentAndShippingPage from './pages/PaymentAndShippingPage/PaymentAndShippingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto']
      }
    });
   }, []);

  return (
    <div className='App'>
      <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/about-us" element={<AboutPage/>}/>
          <Route exact path="/category/:id" element={<CategoryPage/>}/>
          <Route exact path="/products/:id" element={<ItemPage/>}/>
          <Route exact path="/delivery" element={<PaymentAndShippingPage/>}/>
          <Route exact path="/404" element={<NotFoundPage />}/>
          <Route path="*" element={<Navigate to={'/404'}/>}/>
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Footer></Footer>
    </div>
  );
}

export default App;
