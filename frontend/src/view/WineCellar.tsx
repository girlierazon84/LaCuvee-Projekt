import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import WineOne from '../utils/images/WineOne.jpg'
import WineTwo from '../utils/images/WineTwo.jpg'
import WineThree from '../utils/images/WineThree.jpg'
import WineFour from '../utils/images/WineFour.jpg'

const WineCellar = () => {

    return (
        <WineWrapper>
            <SectionOne>
                <h1>Vinkällaren</h1>
            </SectionOne>
            <SectionTwo>
                <h5>
                    En vinkällare insprängd i berget. Mitt i Göteborg.
                </h5>
                <p>
                    La Cuvées vinkällare gör skäl för sitt namn; insprängd i berget döljer sig en dröm för alla älskare
                    av årgångsvin. Vinfacken har en fuktig och sval bergvägg som närmsta granne. Lägg till detta en bra
                    klimatanläggning och ett tryggt säkerhetssystem så har du den idealiska lagringsplatsen.
                </p>
            </SectionTwo>
            <br/>
            <SectionThree>
                <h5>Hyr ditt eget fack till ett bra pris!</h5>
                <p>
                    Vinkällaren består av tre plan med fack för ca <b>100 flaskor</b>.
                    Pris för ett vinfack är <b>265 SEK</b> per månad.
                </p>
            </SectionThree>
            <br/>
            <SectionFour>
                <h5>Enkelt och tillgängligt!</h5>
                <p>
                    Med hjälp av ditt personliga passerkort når du ditt vin dygnet runt. En p-plats, avsedd
                    för vinkällaren, gör det enkelt att lasta i och ur viner när du behöver. När du har lust
                    kan du använda vinprovningsrummet på plan två för att smaka av ett vin med några vänner
                    eller kanske inventera dina flaskor.
                </p>
            </SectionFour>
            <br/>
            <SectionFive>
                <p>
                    Välkommen att skicka ett mail till oss så gör vi en rundvandring!
                </p>
            </SectionFive>
            <h3>Bilder...</h3>
            <SectionSix>
                <div className='vin__one'>
                    <Zoom>
                        <img src={ WineOne } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                    <h5>Vinfack</h5>
                </div>
                <div className='vin__two'>
                    <Zoom>
                        <img src={ WineTwo } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                    <h5>Vinprovningsrummet</h5>
                </div>
                <div className='vin__three'>
                    <Zoom>
                        <img src={ WineThree } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                    <h5>Bergväggen ger atmosfär</h5>
                </div>
                <div className='vin__four'>
                    <Zoom>
                        <img src={ WineFour } alt='La_Cuvée images' width='100%'/>
                    </Zoom>
                    <h5>Prova vin med vännerna?</h5>
                </div>
            </SectionSix>
        </WineWrapper>
    )
}

export default WineCellar

const WineWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  line-height: 2em;
  
  h3 {
    text-align: justify;
    margin: 0 0 20px 50px;
  }

  @media (max-width: 1100px) {
    margin: 1px;
    
    h3 {
      margin: 0 20px 10px 20px;
    }
  }
`

const SectionOne = styled.section`
  padding: 50px;
  line-height: 2em;

  h1 {
    font-size: 40px;
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
  
  h5 {
    font-size: 25px;
  }
  
  p {
    text-align: justify;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 0 20px;

    h5 {
      font-size: 21px;
    }

    p {
      font-size: 19px;
    }
  }
`

const SectionThree = styled.section`
  margin: 0 50px;

  h5 {
    font-size: 25px;
  }

  p {
    text-align: justify;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 0 20px;

    h5 {
      font-size: 21px;
    }

    p {
      font-size: 19px;
    }
  }
`

const SectionFour = styled.section`
  margin: 0 50px;
  line-height: 2em;

  h5 {
    font-size: 25px;
  }

  p {
    text-align: justify;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 0 20px;

    h5 {
      font-size: 21px;
    }

    p {
      font-size: 19px;
    }
  }
`

const SectionFive = styled.section`
  margin: 0 50px 50px 50px;
  line-height: 2em;

  p {
    text-align: justify;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    margin: 0 20px 20px 20px;

    p {
      font-size: 19px;
    }
  }
`

const SectionSix = styled.section`
  padding: 0 50px 50px 50px;
  display: flex;
  
  img {
    width: 330px;
    height: 330px;
    border: 1px solid var(--secondary-color);
  }
  
  .vin__one {
    margin-right: 10px;
  }
  
  .vin__two,
  .vin__three {
    margin: 0 10px;
  }
  
  .vin__four {
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    display: grid;
    padding: 0 20px;


    img {
      width: 100%;
    }
    
    .vin__one,
    .vin__two,
    .vin__three {
      margin: 10px 0;
    }

    .vin__four {
      margin: 10px 0 30px 0;
    }
  }
`
