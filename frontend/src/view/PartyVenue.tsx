import React from 'react'
import styled from 'styled-components'
import Party_Venue from '../utils/images/PartyVenue.jpg'

const PartyVenue = () => {

    return (
        <PartyWrapper>
            <SectionOne className='header'>
                <h1>Festlokalen</h1>
            </SectionOne>
            <SectionTwo className='image'>
                <img src={ Party_Venue } alt='La_Cuvée images'/>
            </SectionTwo>
            <SectionThree className='paragraph'>
                <p>
                    I La Cuvées festlokal  blir det lätt stämningsfullt, antingen det är bröllopsfest,
                    konferens eller födelsedagsfest. Lokalen är byggd i gammal genuin stil med murade valv,
                    mycket synligt tegel och vackra detaljer som skapar en härlig atmosfär.
                </p>
                <br/>
                <p>
                    La Cuvée ligger i en modern fastighet i östra Göteborg och har mycket bra
                    spårvagns- och bussförbindelser till centrala Göteborg.
                </p>
                <br/>
                <p>
                    Festlokalen är drygt <b>300 kvadratmeter</b> och godkänd för <b>120 gäster</b>. När du hyr La Cuvée har du stor
                    valfrihet. Du kan ta med egen mat och dryck eller beställa genom våra samarbetspartners.
                    Här finns tillgång till det mesta i utrustningsväg; allt från bord och stolar till ljusstakar,
                    porslin och glas. All utrustning vi har ingår självklart i hyran. Denna information och
                    mycket mer hittar du här, under FAQ.
                </p>
                <br/>
                <p>
                    Du kan använda dig av La Cuvées kök med bland annat restaurangdiskmaskin, två ugnar, spis,
                    tre kylskåp och en frys. Behöver du hjälp med servering eller städning kan du avtala om
                    det med våra partners.
                </p>
                <br/>
                <p>
                    Funderar du på potentiella datum för din tillställning? Under fliken Bokningar av festlokalen
                    får du enkelt en översyn när lokalen finns tillgänglig.
                </p>
                <br/>
                <p>
                    Välkommen att kontakta oss om du vill ha mer information om vår festlokal eller om du vill
                    komma på en visning!
                </p>
            </SectionThree>
        </PartyWrapper>
    )
}

export default PartyVenue

const PartyWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'El Messiri', sans-serif;
  display: grid;
  grid-template-rows: 150px 2fr;
  grid-template-columns: 2fr 1fr;
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
  margin: 156px 0;
  
  .image {
    grid-area: right;
  }
  
  img {
    width: 89%;
    height: 610px;
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
