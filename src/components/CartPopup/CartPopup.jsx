import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import orderService from '../../services/OrderService';
import AppButton from '../AppButton/AppButton';
import PopupItemCard from '../OrderPopup/PopupItemCard/PopupItemCard';
import './CartPopup.scss'

export default function CartPopup() {

    const [cart, setCart] = useState(null);

    useEffect(() => {
      orderService.setCartUpdateHandlers(() => cartUpdatedCallback());
    }, []);

    const cartUpdatedCallback = () => {
        setCart(orderService.getStorageCart())
    };

  return (
    <Popup className='cart-big-popup' trigger={<button className="button button__outline-yellow button-small"> View Cart </button>} modal>
            <h3> Cart summary </h3>
            <div className="items-container">
                {
                    cart?.items?.length
                    ? cart.items.map((element, index) => {
                        return <PopupItemCard big key={index} item={element}/>
                    })
                    : <div className="empty-cart">Empty Cart</div>
                }
            </div>
            <div className="footer-container">
                <AppButton text={'Checkout'} />
                <div className="total-content">Subtotal: <b>${cart?.fullPrice.toFixed(2)}</b></div>
            </div>
    </Popup>
  )
}
