import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Equipments from "../utils/images/Equipments.jpg";

const Equipment = () => {
    
    return (
        <EquipmentWrapper>
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
                <Zoom>
                    <img src={ Equipments } alt='La_Cuvée images' width='100%'/>
                </Zoom>
            </SectionThree>
            <SectionFour>
                <table>
                    <tr>
                        <th>Möbler</th>
                        <th>Stycke</th>
                    </tr>
                    <tr>
                        <td>Bord</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Stolar</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Extra Bord (annan sort)</td>
                        <td>8</td>
                    </tr>
                </table>
            </SectionFour>
            <SectionFive>
                <table>
                    <tr>
                        <th>Porslin m.m</th>
                        <th>Stycke</th>
                    </tr>
                    <tr>
                        <td>Stora Tallrikar</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Mellan Tallrikar</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Små Tallrikar</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Djupa Tallrikar</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Kaffekoppar med tillhörande fat</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Dricksglas</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Vinglas</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Alla Bestickdelar för Huvudrätt, Dessert alt Förrätt, samt soppa</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Champagneglas</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Avecglas</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Buffét Tallrikar</td>
                        <td>120</td>
                    </tr>
                </table>
            </SectionFive>
            
            <SectionSix>
                <table>
                    <tr>
                        <th>Övrigt</th>
                    </tr>
                    <tr>
                        <td>Nysilverkandelabrar</td>
                        <td>Projektorduk</td>
                    </tr>
                    <tr>
                        <td>Ljushållare för värmeljus</td>
                        <td>Tekannor</td>
                    </tr>
                    <tr>
                        <td>Termosar</td>
                        <td>Vattenkaraffer i plast</td>
                    </tr>
                    <tr>
                        <td>Vinkaraffer i glas</td>
                        <td>Kaffekokare, en större och en mindre</td>
                    </tr>
                    <tr>
                        <td>Städmaterial</td>
                        <td>Toalettpapper och pappershanddukar</td>
                    </tr>
                </table>
                <p><sub>*Observera att denna listan kan ändras utan anmodan.*</sub></p>
            </SectionSix>
        </EquipmentWrapper>
    )
}

export default Equipment

const EquipmentWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  height: 100%;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  display: grid;
  grid-template-rows: 150px 150px 150px 1fr 1fr;
  grid-template-columns: 2fr 2fr;
  grid-template-areas: 'top top'
                       'bottom bottom'
                       'bottom-left-one right'
                       'bottom-left-two right'
                       'bottom-left-two bottom-right';

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
  line-height: 2em;
  grid-area: bottom;
  
  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionThree = styled.section`
  margin-top: 0;
  grid-area: right;
  
  img {
    width: 690px;
    height: 440px;
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
  margin: 0 50px;
  line-height: 2em;
  grid-area: bottom-left-one;
  
  table {
    border-collapse: collapse;
    padding: 70px;
    width: 100%;
  }

  td, th {
    border: 1px solid peachpuff;
    padding: 10px;
    text-align: justify;
    font-size: 17px;
  }

  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}

  th {
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
    color: var(--fourthly-color);
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionFive = styled.section`
  margin: 0 50px 50px 50px;
  line-height: 2em;
  grid-area: bottom-left-two;

  table {
    border-collapse: collapse;
    padding: 70px;
    width: 100%;
  }

  td, th {
    border: 1px solid peachpuff;
    padding: 10px;
    text-align: justify;
    font-size: 17px;
  }

  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}

  th {
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
    color: var(--fourthly-color);
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`

const SectionSix = styled.section`
  padding: 0 50px 0 0;
  width: 100%;
  grid-area: bottom-right;
  
  table {
    border-collapse: collapse;
    padding: 70px;
    width: 100%;
  }

  td, th {
    border: 1px solid peachpuff;
    padding: 10px;
    text-align: justify;
    font-size: 17px;
  }

  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}

  th {
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
    color: var(--fourthly-color);
  }
  
  p {
    padding-top: 27px;
    color: var(--thirdly-color);
  }

  @media (max-width: 1100px) {
    padding: 20px;
  }
`