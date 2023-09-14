import React, { useEffect, useState } from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import DonateDirectlySection from '../../components/DonateDirectlySection/DonateDirectlySection'
import FormGroupComponent from '../../components/FormGroupComponent/FormGroupComponent'
import HomeImageCard from '../../components/HomeImageCard/HomeImageCard'
import ImageCard from '../../components/ImageCard/ImageCard'
import SeparatorLine from '../../components/SeparatorLine/SeparatorLine'
import DeliverySection from '../../components/DeliverySection/DeliverySection'
import HttpService from '../../services/HttpService'
import './HomePage.scss'

export default function HomePage() {

  const [categories, setCategories] = useState(false)

  useEffect(() => {
    const sub = HttpService.getCategories()
    .subscribe(categories => {
      setCategories(categories.response);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [])

    const section = {
        id: 'about-us',
        reverse: false,
        showButton: true,
        paragraphs: [
          {
            head: 'about us',
            content: [
              'The main goal is to remind people that the war is still ongoing, people are dying, thousands of crimes against humanity are being conducted, and it all should stop. The merchandise sold will spread and raise awareness about the war and work as a small way of protest',
              'The merch sold includes the minimum fixed price, although if you are able to donate more, – you are always welcome to state your own price.'
            ]
          }
        ],
        image: '/resources/about-img.png',
    }

  return (
    <div className='home-page-section'>
      <HomeImageCard></HomeImageCard>
      <InfoSection section={section}></InfoSection>
      <SeparatorLine></SeparatorLine>
      <CategoriesSection categories={categories}></CategoriesSection>
      <SeparatorLine mirror={true}></SeparatorLine>
      <ImageCard image='/resources/after-categories.svg'></ImageCard>
      <DonateDirectlySection></DonateDirectlySection>
      <FormGroupComponent type='design'></FormGroupComponent>
      <DeliverySection></DeliverySection>
      <FormGroupComponent hasId type='email'></FormGroupComponent>
    </div>
  )
}
