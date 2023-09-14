import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './CategoryImageCard.scss'

export default function CategoryImageCard({image, name, onLoad}) {


  return (
    <section className='category-image-card'>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="d-block carousel-image" style={{backgroundImage: `url(${image})`}}></div>
          <div className="carousel-gradient"/>
          <Carousel.Caption>
            <h3>{name}</h3>
            <h4>All the profit goes to the Armed Forces of Ukraine and, after the victory, to the reestablishment of the country</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
