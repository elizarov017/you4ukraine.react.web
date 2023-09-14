import React, {
  useEffect,
  useState
} from 'react'
import {
    useParams,
  } from "react-router-dom";
import CategoryImageCard from '../../components/CategoryImageCard/CategoryImageCard';
import DeliverySection from '../../components/DeliverySection/DeliverySection';
import DonateDirectlySection from '../../components/DonateDirectlySection/DonateDirectlySection';
import FormGroupComponent from '../../components/FormGroupComponent/FormGroupComponent';
import InfoSection from '../../components/InfoSection/InfoSection';
import ItemList from '../../components/ItemList/ItemList';
import SeparatorLine from '../../components/SeparatorLine/SeparatorLine';
import HttpService from '../../services/HttpService';
import { TailSpin } from  'react-loader-spinner'
import ApplicationConstants from '../../ApplicationConstants';
import './CategoryPage.scss'

export default function CategoryPage() {

    const { id } = useParams();

    const [category, setCategory] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!category?.['imgPath']) {
        return;
      }

      const imageLoader = new Image();
      imageLoader.src = category['imgPath'];

      imageLoader.onload = () => {
        setIsLoading(false);
      };
    }, [category])

     useEffect(() => {
        setCategory(false);
        const sub = HttpService.getCategoryById(id).subscribe(categoryRes => {
          setCategory(categoryRes.response);
        });

        return () => {
          sub.unsubscribe();
        }
    }, [id]);

    const sectionInfo =  {
        id: 'first-paragraph',
        reverse: false,
        showButton: true,
        paragraphs: [
          {
            head: 'about us',
            content: [
              'The main goal is to remind people that the war is still ongoing, people are dying, thousands of crimes against humanity are being conducted, and it all should stop. The merchandise sold will spread and raise awareness about the war and work as a small way of protest.',
              'The merch sold includes the minimum fixed price, although if you are able to donate more, – you are always welcome to state your own price.'
            ]
          }
        ],
        image: '/resources/about-category.png',
    };

  return (
    <div className='category-page'>
      {
        isLoading ?
        <div className="loader-wrap">
          <TailSpin color={ApplicationConstants.COLORS.PRIMARY} height={100} width={100} />
        </div>
        :
        <div className='category-page-content'>
          <CategoryImageCard onLoad={() => setIsLoading(false)} image={category['imgPath']} name={category['categoryName']}></CategoryImageCard>
          <SeparatorLine></SeparatorLine>
          <ItemList category={category}></ItemList>
          <SeparatorLine></SeparatorLine>
          <InfoSection section={sectionInfo} height={600} ></InfoSection>
          <DonateDirectlySection></DonateDirectlySection>
          <FormGroupComponent type='design'></FormGroupComponent>
          <DeliverySection></DeliverySection>
          <FormGroupComponent hasId type='email'></FormGroupComponent>
        </div>
      }
    </div>
  )
}
