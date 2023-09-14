import React, { useEffect, useState } from 'react';
import './ItemPage.scss';
import {
    useParams
  } from "react-router-dom";
import FormGroupComponent from '../../components/FormGroupComponent/FormGroupComponent';
import InfoSection from '../../components/InfoSection/InfoSection';
import ItemSection from '../../components/ItemSection/ItemSection';
import HttpService from '../../services/HttpService';

export default function ItemPage() {

    const { id } = useParams();
    const [item, setItem] = useState(false);

    useEffect(() => {
      setItem(false);
      const sub = HttpService.getItemById(id)
        .subscribe(item => {
          setItem(item.response);
        });

      return () => {
        sub.unsubscribe();
      }
    }, [id])

    let section = {
        id: 'item-paragraph',
        reverse: false,
        showButton: false,
        paragraphs: [
          {
            content: item?.desc || []
          }
        ],
        image: item?.printImgPath,
    };

  return (
    <section className='item-page'>
        <ItemSection item={item}/>
        <InfoSection height={376} spaceBetween section={section} />
        <FormGroupComponent hasId type={'design'}/>
    </section>
  )
}
