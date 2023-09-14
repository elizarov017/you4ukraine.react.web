import React,  { useEffect, useState } from 'react'
import orderService from '../../services/OrderService';
import AppButton from '../AppButton/AppButton';
import './OrderPopup.scss'
import PopupItemCard from './PopupItemCard/PopupItemCard';
import CartPopup from '../CartPopup/CartPopup';

export default function OrderPopup({ isShown }) {

    const [order, setOrder] = useState(null);

    useEffect(() => {
        setOrder(orderService.getStorageCart());
    }, [isShown]);

  return (
    <div id='order-popup-container' style={{display: isShown ? 'block' : 'none'}}>
      <div className="order-popup">
        <div className="items-wrap">
            { order?.['items'].map((item, index) => <PopupItemCard key={index} item={item}/>) }
            { order?.['items']?.length ? '' : <div className='empty-cart-msg'><span>Empty Cart</span></div>}
        </div>
        <div className="popup-footer">
          <div className="total-line">
            <span>Total ({order?.['items']?.length} item{order?.['items']?.length > 1 ? 's' : ''})</span>
            <span>${order?.['fullPrice'].toFixed(2)}</span>
          </div>
          <div className="button-wrap">
            <CartPopup />
            <AppButton small type='outline-yellow' action={() => alert('no.')} text={'Checkout'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
