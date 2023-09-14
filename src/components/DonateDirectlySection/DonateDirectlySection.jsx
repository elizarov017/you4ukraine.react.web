import React from 'react'
import AppButton from '../AppButton/AppButton'
import { Container } from 'react-bootstrap'
import './DonateDirectlySection.scss'

export default function DonateDirectlySection() {
  const donateUrl = 'https://linktr.ee/RazomForUkraine';

  return (
    <section className='donate-directly-section'>
      <Container className='donate-directly'>
        <img className='donation-img' src="/resources/emblem.png" alt="" />
        <div className="donate-wrapper">
          <h3>Donate directly to ukrainian ngo</h3>
          <AppButton action={() => {window.open(donateUrl, '_blank').focus();}} type = 'outline-yellow' text={'Donate'}></AppButton>
        </div>
      </Container>
    </section>
  )
}
