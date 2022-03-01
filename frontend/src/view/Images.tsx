import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import One from '../utils/images/bilder/one.jpg'
import Two from '../utils/images/bilder/two.jpg'
import Three from '../utils/images/bilder/three.jpg'
import Four from '../utils/images/bilder/four.jpg'
import Five from '../utils/images/bilder/five.jpg'
import Six from '../utils/images/bilder/six.jpg'
import Seven from '../utils/images/bilder/seven.jpg'
import Eight from '../utils/images/bilder/eight.jpg'
import Nine from '../utils/images/bilder/nine.jpg'
import Ten from '../utils/images/bilder/ten.jpg'
import Eleven from '../utils/images/bilder/eleven.jpg'
import Twelve from '../utils/images/bilder/twelve.jpg'
import Thirteen from '../utils/images/bilder/thirteen.jpg'
import Fourteen from '../utils/images/bilder/fourteen.jpg'
import Fifteen from '../utils/images/bilder/fifteen.jpg'
import Sixteen from '../utils/images/bilder/sixteen.jpg'
import Seventeen from '../utils/images/bilder/seventeen.jpg'
import Eighteen from '../utils/images/bilder/eighteen.jpg'
import Twenty_Four from '../utils/images/bilder/twenty-four.jpg'
import Twenty_Five from '../utils/images/bilder/twenty-five.jpg'
import Twenty_Seven from '../utils/images/bilder/twenty-seven.jpg'
import Twenty_Eight from '../utils/images/bilder/twenty-eight.jpg'
import Twenty_Nine from '../utils/images/bilder/twenty-nine.jpg'
import Thirty from '../utils/images/bilder/thirty.jpg'
import Thirty_One from '../utils/images/bilder/thirty-one.jpg'
import Thirty_Three from '../utils/images/bilder/thirty-three.jpg'
import Thirty_Four from '../utils/images/bilder/thirty-four.jpg'
import Thirty_Five from '../utils/images/bilder/thirty-five.jpg'
import Thirty_Seven from '../utils/images/bilder/thirty-seven.jpg'
import Thirty_Eight from '../utils/images/bilder/thirty-eight.jpg'
import Thirty_Nine from '../utils/images/bilder/thirty-nine.jpg'
import Forty from '../utils/images/bilder/fourty.jpg'
import Forty_Four from '../utils/images/bilder/fourty-four.jpg'
import Forty_Five from '../utils/images/bilder/fourty-five.jpg'
import Forty_Six from '../utils/images/bilder/fourty-six.jpg'
import Forty_Seven from '../utils/images/bilder/fourty-seven.jpg'
import Forty_Eight from '../utils/images/bilder/fourty-eight.jpg'
import Forty_Nine from '../utils/images/bilder/fourty-nine.jpg'
import Fifty from '../utils/images/bilder/fifty.jpg'
import Fifty_One from '../utils/images/bilder/fifty-one.jpg'
import Fifty_Two from '../utils/images/bilder/fifty-two.jpg'
import Fifty_Four from '../utils/images/bilder/fifty-four.jpg'
import Fifty_Five from '../utils/images/bilder/fifty-five.jpg'
import Fifty_Six from '../utils/images/bilder/fifty-six.jpg'
import Fifty_Seven from '../utils/images/bilder/fifty-seven.jpg'
import Fifty_Eight from '../utils/images/bilder/fifty-eight.jpg'
import Fifty_Nine from '../utils/images/bilder/fifty-nine.jpg'
import Sixty from '../utils/images/bilder/sixty.jpg'
import Sixty_One from '../utils/images/bilder/sixty-one.jpg'
import Sixty_Two from '../utils/images/bilder/sixty-two.jpg'
import Sixty_Three from '../utils/images/bilder/sixty-three.jpg'
import Sixty_Four from '../utils/images/bilder/sixty-four.jpg'
import Sixty_Five from '../utils/images/bilder/sixty-five.jpg'
import Sixty_Six from '../utils/images/bilder/sixty-six.jpg'
import Sixty_Seven from '../utils/images/bilder/sixty-seven.jpg'
import Sixty_Eight from '../utils/images/bilder/sixty-eight.jpg'
import Sixty_Nine from '../utils/images/bilder/sixty-nine.jpg'
import Seventy from '../utils/images/bilder/seventy.jpg'
import Seventy_One from '../utils/images/bilder/seventy-one.jpg'
import Seventy_Two from '../utils/images/bilder/seventy-two.jpg'
import Seventy_Three from '../utils/images/bilder/seventy-three.jpg'
import Seventy_Five from '../utils/images/bilder/seventy-five.jpg'
import Seventy_Six from '../utils/images/bilder/seventy-six.jpg'
import Seventy_Seven from '../utils/images/bilder/seventy-seven.jpg'
import Seventy_Eight from '../utils/images/bilder/seventy-eight.jpg'
import Seventy_Nine from '../utils/images/bilder/seventy-nine.jpg'
import Eighty from '../utils/images/bilder/eighty.jpg'
import Eighty_One from '../utils/images/bilder/eighty-one.jpg'
import Eighty_Three from '../utils/images/bilder/eighty-three.jpg'
import Eighty_Four from '../utils/images/bilder/eighty-four.jpg'
import Eighty_Five from '../utils/images/bilder/eighty-five.jpg'
import Eighty_Six from '../utils/images/bilder/eighty-six.jpg'
import Eighty_Seven from '../utils/images/bilder/eighty-seven.jpg'
import Eighty_Eight from '../utils/images/bilder/eighty-eight.jpg'
import Eighty_Nine from '../utils/images/bilder/eighty-nine.jpg'
import Ninety from '../utils/images/bilder/ninety.jpg'
import Ninety_One from '../utils/images/bilder/ninety-one.jpg'
import Ninety_Two from '../utils/images/bilder/ninety-two.jpg'
import Ninety_Three from '../utils/images/bilder/ninety-three.jpg'
import Ninety_Four from '../utils/images/bilder/ninety-four.jpg'
import Ninety_Five from '../utils/images/bilder/ninety-five.jpg'
import Ninety_Seven from '../utils/images/bilder/ninety-seven.jpg'
import Ninety_Nine from '../utils/images/bilder/ninety-nine.jpg'
import Hundred from '../utils/images/bilder/hundred.jpg'
import Hundred_One from '../utils/images/bilder/hundred-one.jpg'
import Hundred_Two from '../utils/images/bilder/hundred-two.jpg'
import Hundred_Three from '../utils/images/bilder/hundred-three.jpg'
import Hundred_Four from '../utils/images/bilder/hundred-four.jpg'
import Hundred_Five from '../utils/images/bilder/hundred-five.jpg'
import Hundred_Six from '../utils/images/bilder/hundred-six.jpg'
import Hundred_Seven from '../utils/images/bilder/hundred-seven.jpg'
import Hundred_Eight from '../utils/images/bilder/hundred-eight.jpg'

const Images = () => {
    
    return (
        <AboutWrapper>
            <SectionOne>
                <h1>Bilder</h1>
            </SectionOne>
            <SectionTwo>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ten }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eleven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twelve }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirteen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fourteen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifteen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixteen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventeen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighteen }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twenty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twenty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twenty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twenty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Twenty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Thirty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Forty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Fifty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Sixty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Seventy_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Eight }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Eighty_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Ninety_Nine }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_One }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Two }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Three }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Four }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Five }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Six }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Seven }
                        width="100%"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="La Cuvée"
                        src={ Hundred_Eight }
                        width="100%"
                    />
                </Zoom>
            </SectionTwo>
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

  @media (max-width: 1100px) {
    margin: 1px;
  }
`

const SectionOne = styled.section`
  padding: 50px;

  h1 {
    font-size: 50px;
    padding-left: 17px;
  }

  @media (max-width: 1100px) {
    padding: 20px;

    h1 {
      font-size: 35px;
    }
  }
`

const SectionTwo = styled.section`
  padding: 0 50px 50px 50px;

  img {
    width: 250px;
    height: 200px;
    border: 1px solid var(--secondary-color);
    margin: 0 0 20px 20px;
  }

  @media (max-width: 1100px) {
    padding: 0 20px;

    img {
      width: 105px;
      height: 70px;
    }
  }
`