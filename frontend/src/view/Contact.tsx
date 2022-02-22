import React from 'react'
import styled from 'styled-components'
import sign from "../utils/images/sign.jpg";

const Contact = () => {
    
    return (
        <ContactWrapper>
            <SectionOne className='header'>
                <h1>Kontakt</h1>
            </SectionOne>
            <SectionTwo className='image'>
                <img src={ sign } alt='La_Cuvée images'/>
            </SectionTwo>
            <SectionThree>
                <p>Festlokal och vinkällare La Cuvée drivs av Tokali AB,</p>
                <br/>
                <p>Välkommen att höra av dig om du har frågor eller vill boka tid för en visning.</p>
                <br/>
                <p>Tokali AB / La Cuvée</p>
                <p><b>Telefon:</b> 0768-024 032</p>
                <p><b>E-mail:</b> lacuvee@tokali.se</p>
                <p><b>Adress:</b> La Cuvée är Ättestigen 8, mittemot spårvagnsspåret.</p>
                <br/>
                <p>För vägbeskrivning och karta, se här...</p>
            </SectionThree>
        </ContactWrapper>
    )
}

export default Contact

const ContactWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  display: grid;
  line-height: 2em;
  grid-template-rows: 150px 2fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'top top'
                    'right left'
                    'right left';

  @media (max-width: 1100px) {
    margin: 1px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-template-areas: none;
  }
`

const SectionOne = styled.section`
  padding: 50px;

  .header {
    grid-area: top;
  }

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
  margin: 157.5px 50px;

  .image {
    grid-area: right;
  }

  img {
    width: 100%;
    height: 340px;
    border: 1px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    margin: 0 20px;

    img {
      width: 100%;
    }
  }
`

const SectionThree = styled.section`
  margin: 0 50px 50px 50px;

  .paragraph {
    grid-area: left;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 20px;
  }
`