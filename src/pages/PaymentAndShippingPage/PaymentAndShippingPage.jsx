import React from 'react'
import DonateDirectlySection from '../../components/DonateDirectlySection/DonateDirectlySection'
import FormGroupComponent from '../../components/FormGroupComponent/FormGroupComponent'
import InfoSection from '../../components/InfoSection/InfoSection'
import './PaymentAndShippingPage.scss'
import ShippingSection from '../../components/ShippingSection /ShippingSection'

export default function PaymentAndShippingPage() {

    const sections = [
        {
            id: 'first-paragraph',
            reverse: false,
            showButton: false,
            paragraphs: [
              {
                head: 'payment',
                content: [
                 'We accept payment from credit and debit cards, including PayPal. ',
                 'The merch sold includes the minimum fixed price, although if you are able to donate more, – you are always welcome to state your own price.',
                 'We regularly update the financial report where we describe our money transactions and donations. '
                ]
              }
            ],
            image: '/resources/shipping-page/payment-image-first.png',
        },
        {
            id: 'second-paragraph',
            reverse: true,
            showButton: false,
            paragraphs: [
              {
                head: 'Kent State University',
                content: [
                 'If you are a student or staff member at Kent State University, you can pick up your order at the Eastway delivery center without paying the shipping fee after you receive an email.'
                ]
              }
            ],
            image: '/resources/shipping-page/kent-emblem.png',
        },
    ]
  return (
    <section className='payment-delivery-page'>
        <InfoSection spaceBetween height={425} section={sections[0]}/>
        <ShippingSection/>
        <div className="university-wrap">
            <InfoSection height={207} section={sections[1]}/>
        </div>
        <DonateDirectlySection></DonateDirectlySection>
        <FormGroupComponent hasId type='email'></FormGroupComponent>
    </section>
  )
}
