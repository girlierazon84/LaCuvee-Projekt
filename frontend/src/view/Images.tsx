import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import One from '../utils/images/1.jpg'

const Images = () => {
    
    return (
        <AboutWrapper>
            <h1>Bilder</h1>
            <Zoom>
                <img
                    alt="La Cuvée"
                    src={ One }
                    width="500"
                />
            </Zoom>
        </AboutWrapper>
    )
}

export default Images

const AboutWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  height: 100%;
`