import React from 'react'
import CategoriesList from '../CategoriesList/CategoriesList'
import { Container } from 'react-bootstrap';
import './CategoriesSection.scss'
import SectionHook from '../SectionHook/SectionHook';

export default function CategoriesSection({ categories }) {
  return (
    <section>
        <SectionHook idName={'categories'}></SectionHook>
        <Container>
            <h3>Categories</h3>
            <CategoriesList categories={categories}></CategoriesList>
        </Container>
    </section>
  )
}
