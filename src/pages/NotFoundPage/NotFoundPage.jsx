import React from 'react'
import { Container } from 'react-bootstrap'
import './NotFoundPage.scss'

export default function NotFoundPage() {
  return (
    <section className='not-found-page' style={{backgroundImage: `url('/resources/plane-big.svg')`}}>
        <Container className='not-found-container'>
            <div className="content-wrap">
                <div className="num">404</div>
                <div className="text">Sorry, page not found</div>
            </div>
            <div className="img-wrap">

            </div>
        </Container>
    </section>
  )
}
