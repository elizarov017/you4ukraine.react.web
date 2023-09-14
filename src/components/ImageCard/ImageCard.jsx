import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './ImageCard.scss'

export default function ImageCard({image, height}) {
  return (
    <Container>
        <Card className="card-image">
            <Card.Img style={{maxHeight: height}} height={height} src={image} alt="Card image" />
        </Card>
    </Container>
  )
}
