import React from 'react'
import { useNavigate } from "react-router-dom";
import './ItemCard.scss'

export default function ItemCard({ item }) {


  const currency = {
    'USD': '$',
  };

  const navigate = useNavigate();

  const navigateHandler = (event, href) => {
      event.preventDefault();
      navigate(href);
  }

  return (
    <div className="card-wrapper">
      <a className='item-card' onClick={e => navigateHandler(e, `/products/${item.itemId}`)} href={`/products/${item.itemId}`}>
          <div className="image-wrap" style={{backgroundImage: `url('${item.imgPath}')`}}></div>
          <div className="card-inner">
            <span className='item item-name'>{item.itemName}</span>
            <span className='item item-price'>{currency[item.currencyCode] + item.price.toFixed(2)}</span>
            {item.author && <span className='item item-author'>by {item.author.join(', ')}</span>}
          </div>
      </a>
    </div>
  )
}
