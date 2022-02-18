import React from 'react'
import styled from 'styled-components'
import utrustning from "../utils/images/Utrustning.jpg";

const Utrustning = () => {
    
    return (
        <UtrustningWrapper>
            <SectionOne>
                <h1>Utrustning</h1>
            </SectionOne>
            <SectionTwo>
                <p>
                    Här finner du en förteckning över den utrustning som finns att tillgå på La Cuvée.
                    Kontakta oss gärna om det är något du saknar. Naturligtvis ingår all utrustning i hyran.
                </p>
            </SectionTwo>
            <SectionThree>
                <img src={ utrustning } alt='La_Cuvée images'/>
            </SectionThree>
            <SectionFour>
                <h2><u>Möbler</u></h2>
                <p>15 bord 120 stolar 8 extra bord (annan sort)</p>
            </SectionFour>
            <SectionFive>
                <h2><u>Porslin m.m</u></h2>
                <ul>
                    <li>120 stora tallrikar</li>
                    <li>120 mellantallrikar</li>
                    <li>120 små tallrikar</li>
                    <li>120 djupa tallrikar</li>
                    <li>120 kaffekoppar med tillhörande fat</li>
                    <li>120 dricksglas</li>
                    <li>120 vinglas</li>
                    <li>120 st av alla bestickdelar för huvudrätt, dessert alt förrätt, samt soppa</li>
                    <li>120 champagneglas</li>
                    <li>120 avecglas</li>
                    <li>120 buffétallrikar</li>
                </ul>
            </SectionFive>
            <SectionSix>
                <h2><u>Övrigt</u></h2>
                <ul>
                    <li>Nysilverkandelabrar</li>
                    <li>Projektorduk</li>
                    <li>Ljushållare för värmeljus</li>
                    <li>Tekannor</li>
                    <li>Termosar</li>
                    <li>Vattenkaraffer i plast</li>
                    <li>Vinkaraffer i glas</li>
                    <li>Kaffekokare, en större och en mindre</li>
                    <li>Städmaterial</li>
                    <li>Toalettpapper och pappershanddukar</li>
                </ul>
                <br/>
                <br/>
                <br/>
                <p><sub>*Observera att denna listan kan ändras utan anmodan.*</sub></p>
            </SectionSix>
        </UtrustningWrapper>
    )
}

export default Utrustning

const UtrustningWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'El Messiri', sans-serif;
  display: grid;
  grid-template-rows: 150px 150px 150px 2fr 2fr;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'top top'
                       'bottom bottom'
                       'bottom-left right'
                       'bottom-left-one right'
                       'bottom-left-two right';

  @media (max-width: 1100px) {
    margin: 1px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-template-areas: none;
    display: block;
  }
`

const SectionOne = styled.section`
  padding: 50px 50px 0 50px;
  grid-area: top;
  
  h1 {
    font-size: 50px;
  }

  @media (max-width: 1100px) {
    padding: 20px;

    h1 {
      font-size: 35px;
    }
  }
`

const SectionTwo = styled.section`
  margin: 0 50px;
  grid-area: bottom;
  
  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionThree = styled.section`
  margin-top: 10px;
  grid-area: right;
  
  img {
    width: 95%;
    height: 940px;
    border: 1px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    margin: 0 20px;

    img {
      width: 100%;
      height: 300px;
    }
  }
`

const SectionFour = styled.section`
  margin: 0 50px 0 50px;
  grid-area: bottom-left;
  
  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionFive = styled.section`
  margin: 0 50px 0 50px;
  grid-area: bottom-left-one;

  li {
    margin-left: 30px;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionSix = styled.section`
  padding: 0 50px 0 50px;
  grid-area: bottom-left-two;
  
  li {
    margin-left: 30px;
    font-size: 20px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    padding: 20px;
  }
`