import React from 'react'
import './AboutPage.scss'
import DonateDirectlySection from '../../components/DonateDirectlySection/DonateDirectlySection'
import FormGroupComponent from '../../components/FormGroupComponent/FormGroupComponent'
import ImageCard from '../../components/ImageCard/ImageCard'
import ThankSection from '../../components/ThankSection/ThankSection'
import InfoSection from '../../components/InfoSection/InfoSection'

export default function AboutPage() {

  const sections = [
    {
      id: 'first-paragraph',
      reverse: false,
      showButton: false,
      paragraphs: [
        {
          head: 'about us',
          content: [
            'All the profit goes to the Armed Forces of Ukraine and, after the victory, to the reestablishment of the country.',
            'The merch sold includes the minimum fixed price, although if you are able to donate more, – you are always welcome to state your own price.'
          ]
        }
      ],
      image: '/resources/about-page/second.png',
    },
    {
      id: 'second-paragraph',
      reverse: true,
      showButton: false,
      paragraphs: [
        {
          head: 'Our mission:',
          content: [
            'The main goal is to remind people that the war is still ongoing, people are dying, thousands of crimes against humanity are being conducted, and it all should stop. The merchandise sold will spread and raise awareness about the war and work as a small way of protest.',
            'The merch sold includes the minimum fixed price, although if you are able to donate more, – you are always welcome to state your own price.'
          ]
        }
      ],
      image: '/resources/about-page/first.png',
    },
    {
      id: 'third-paragraph',
      reverse: false,
      showButton: false,
      paragraphs: [
        {
          head: 'Why to donate through us?',
          content: [
            'By buying the merch from us, you not only donate to the Ukrainian army but also get the T-shirt/poster/bag that will work as a reminder for others, and you will also become a representative of support to Ukraine.'
          ]
        },
        {
          head: 'Who are we?',
          content: [
            'We are Olha, Olia and Dustin in the US, Valeria in Slovenia, Olexandr in Germany, Andrew, Solomiya, Bohan and Liza in Ukraine. Spread worldwide, we are all united by the idea of showing what\'s really happening in Ukraine and spreading awareness about the ongoing war.'
          ]
        },
      ],
      image: '/resources/about-page/third.png',
    },
  ]

  return (
    <div className='about-us-page-section'>
      {sections.map(section => (<InfoSection key={section.id} height={400} section={section} />))}
      <ThankSection />
      <ImageCard height={400} image='/resources/about-page/bottom.png'></ImageCard>
      <DonateDirectlySection></DonateDirectlySection>
      <FormGroupComponent hasId type='email'></FormGroupComponent>
    </div>
  )
}
