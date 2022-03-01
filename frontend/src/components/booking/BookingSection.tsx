import React from 'react';
import styled from 'styled-components'
import Eight from "../../utils/images/8.jpg";

const BookingSection = () => {
    return (
        <SectionWrapper>
            <SectionOne>
                <h1>Boka</h1>
            </SectionOne>
            <SectionTwo>
                <img src={ Eight } alt='La_Cuvée images'/>
            </SectionTwo>
            <SectionThree>
                <p>
                    Är du intresserad av boka festlokalen? I vår kalender får du snabbt en översyn över de datum
                    som redan är uppbokade (dessa markerade i rött).
                </p>
                <br/>
                <p>
                    Tänk dock på att först till kvarn gäller. Ett datum som ser ledigt ut idag kan vara
                    upptaget imorgon. Vi tar inga preliminärbokningar.
                </p>
                <br/>
                <p>
                    Välkommen att kontakta oss om du vill ha mer information om vår trevliga festlokal eller
                    om du vill komma på en visning! Efter att ha sett lokalen och du önskar hyra den meddelar
                    du personnummer, namn och ett mobilnummer. Du får sedan ett hyresavtal mailat till dig som
                    du signerar och returnerar. Hyresavtalet är bindande.
                </p>
            </SectionThree>
        </SectionWrapper>
    )
}

export default BookingSection

const SectionWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'top top'
                    'left right';

  @media (max-width: 1100px) {
    margin: 1px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-template-areas: none;
  }
`

const SectionOne = styled.section`
  padding: 50px;
  grid-area: top;

  h1 {
    font-size: 50px;
  }

  @media (max-width: 1100px) {
    padding: 30px 10px;

    h1 {
      font-size: 35px;
    }
  }
`

const SectionTwo = styled.section`
  margin: 8px 0 0 0;
  grid-area: right;

  img {
    width: 89.5%;
    height: 304px;
    border: 2px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    margin: 100px 10px;

    img {
      width: 100%;
    }
  }
`

const SectionThree = styled.section`
  margin: 0 50px;
  line-height: 2em;
  grid-area: left;

  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 440px 10px;
  }
`
