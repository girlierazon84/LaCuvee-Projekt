import React from 'react'
import styled from 'styled-components'

const HomeText = () => {
    return (
        <TextWrapper>
            <SectionOne>
                <h1>Bröllop,vinprovning eller studentfest?</h1>
                <h1>- välkommen till Göteborgs mysigaste festlokal!</h1>
            </SectionOne>
            <SectionTwo>
                <h5>På La Cuvée väljer du själv</h5>
            </SectionTwo>
            <SectionThree>
                <p>
                    Festlokalen är unik i sitt slag med sina murade valv och vitrappade väggar.
                    Här får du en oförglömlig kväll både med det lilla eller stora sällskapet.
                    Du väljer själv om du vill ta med mat och dryck, laga själv eller anlita catering.
                </p>
                <br/>
                <p>
                    Att stiga in i vinkällaren, granne med festlokalen, är som att besöka en annan värld,
                    där berggrunden bildar en massiv vägg som skyddar från väder och vind.
                    Här kan du förvara ditt vin, men ändå ha det lättåtkomligt med ditt personliga passerkort.
                </p>
            </SectionThree>

        </TextWrapper>
    )
}

export default HomeText

const TextWrapper = styled.section`
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  font-family: 'El Messiri', sans-serif;
  color: var(--primary-color);
`

const SectionOne = styled.section`
  padding: 50px;
  
  h1 {
    font-size: 30px;
  }

  @media (max-width: 1100px) {
    padding: 30px 20px 35px 20px;
    
    h1 {
      font-size: 19px;
    }
  }
`

const SectionTwo = styled.section`
  padding: 0 50px 10px 50px;
  
  h5 {
    font-size: 25px;
  }

  @media (max-width: 1100px) {
    padding: 0 20px 10px 20px;
    
    h5 {
      font-size: 17px;
    }
  }
`

const SectionThree = styled.section`
  padding: 0 50px 20px 50px;
  
  p {
    text-align: justify;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    padding: 0 20px 30px 20px;
  }
  
  p {
    font-size: 17px;
  }
`