import React from 'react'
import { Container } from 'react-bootstrap'
import AppButton from '../AppButton/AppButton'
import SectionHook from '../SectionHook/SectionHook'
import { useNavigate } from "react-router-dom";

import './InfoSection.scss'

export default function InfoSection({section, height, spaceBetween}) {

    const navigate = useNavigate();

  return (
    <section>
        <SectionHook idName={section.id}></SectionHook>
        <Container className={`info-container`}>
            <div className={`info-inner ${section.reverse ? 'row-reverse' : ''} ${spaceBetween ? 'spc-btw' : 'spc-around'}`}>
                <div className="info-text-content">
                {
                    section.paragraphs.map((par, index) => {
                        return (
                            <div key={index}>
                                {
                                    par.head &&
                                    (<div>
                                        <h3 >{par.head}</h3>
                                    </div>)
                                }
                                <div className="paragraph-wrap">
                                    {par.content.map((content, index) => <p key={index}>{content}</p>)}
                                </div>
                            </div>
                        )
                    })
                }
                {section.showButton && <div className="button-wrap">
                    <AppButton type="blue" action={() => navigate('/about-us')} text='How does it all work?'></AppButton>
                </div>}
                </div>
                <div className="image-wrap">
                    <img src={section.image} style={{maxHeight: height}} alt=""/>
                </div>
            </div>
        </Container>
    </section>
  )
}