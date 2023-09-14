import React from 'react'
import orderService from '../../../services/OrderService'
import './PopupItemCard.scss'

export default function PopupItemCard({ item, big }) {
  return (
    <div className={big ? 'popup-big-item-card' : 'popup-item-card'}>
        <div className="image-wrap" style={{backgroundImage: `url('${item.imgPath[0]}')`}}></div>
        <div className='item-name'> <span className='name'>{item.itemName}</span> {item.size ? <span className='size'>Size: {item.size}</span>: ''}</div>
        <div className="item-price">
          <span className='price'>
            ${isNaN(parseFloat(item?.price)) ? '' : parseFloat(item?.price).toFixed(2)}
          </span>
          {big ? <div onClick={() => orderService.removeStorageItem(item)} className='remove-button'>Remove</div> : ''}
        </div>
    </div>
  )
}
