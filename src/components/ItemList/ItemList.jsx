import React from 'react'
import './ItemList.scss'
import { Container } from 'react-bootstrap'
import ItemCard from '../ItemCard/ItemCard'


export default function ItemList({category}) {


  return (
    <section className='item-list'>
        <Container className='item-list-container'>
            {
              category.items.map((item, index) => <ItemCard key={item.itemId + '_' + index} item={item}></ItemCard>)
            }
        </Container>
    </section>
  )
}
