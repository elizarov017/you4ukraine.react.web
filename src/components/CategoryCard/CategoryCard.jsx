import React from 'react'
import './CategoryCard.scss'
import { useNavigate } from "react-router-dom";

export default function CategoryCard({category}) {

  const navigate = useNavigate();

  const navigateHandler = (event, href) => {
      event.preventDefault();
      navigate(href);
  }

  return (
    <a className='category-card' onClick={e => navigateHandler(e, '/category/' + (category.categoryId))} href={'/category/' + (category.categoryId)}>
        <div className="category-image-wrap" style={{backgroundImage: `url(${category.imgPath})`}}/>
        <span>{category.categoryName}</span>
    </a>
  )
}
