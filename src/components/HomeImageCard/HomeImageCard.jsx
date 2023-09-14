import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AppButton from '../../components/AppButton/AppButton'
import './HomeImageCard.scss'

export default function HomeImageCard() {

  // const url = 'https://drive.google.com/uc?id=1n10YDeqtQMBguPVbzWXiMJQbhtSaTt8T';

  return (
    <section className='home-image-card'>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="d-block carousel-image" style={{backgroundImage: `url("/resources/home-page-image.jpg")`}}></div>
          <Carousel.Caption className='carousel-caption-image-card'>
            <h3>Buy a merch - support Ukraine</h3>
            <h4>All the profit goes to the Armed Forces of Ukraine and, after the victory, to the reestablishment of the country</h4>
            <div className="button-wrap">
              <AppButton type="outline-blue" action={() => document.getElementById("categories").scrollIntoView()} text='Support NOW'></AppButton>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
