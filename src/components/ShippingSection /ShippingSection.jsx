import React from 'react'
import { Container } from 'react-bootstrap'
import SectionHook from '../SectionHook/SectionHook'
import './ShippingSection.scss'

export default function ShippingSection () {
  return (
    <section className='shipping-section-container'>
      <SectionHook idName={'shipping'}></SectionHook>
      <Container>
          <div className="content-container">
            <h3>Shipping</h3>
            <p>We ship our products around the US and Canada with <a target={'_blank'} href="https://www.ups.com/us/en/Home.page" rel="noreferrer">UPS</a>. Price and estimated time for the delivery will depend on the location.</p>
          </div>
          <img src="/resources/plane.svg" alt="" />
      </Container>
    </section>
  )
}
