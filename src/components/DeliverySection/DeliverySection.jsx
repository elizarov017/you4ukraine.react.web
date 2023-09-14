import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import AppButton from '../AppButton/AppButton'
import SectionHook from '../SectionHook/SectionHook'
import './DeliverySection.scss'

export default function DeliverySection() {

  const navigate = useNavigate();

  return (
    <section className='delivery-section-container'>
      <SectionHook idName={'delivery'}></SectionHook>
      <Container>
          <div className="content-container">
            <h3>We are accepting all types of payments and are shipping to every part of the United States and Canada.</h3>
            <AppButton type='outline-yellow' text={'Discover more'} action={() => navigate('/delivery')}></AppButton>
          </div>
          <img src="/resources/plane.svg" alt="" />
      </Container>
    </section>
  )
}
