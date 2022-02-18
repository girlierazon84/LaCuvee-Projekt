import React from 'react'
import styled from 'styled-components'


const Pris = () => {
    
    return (
        <PriceWrapper>
            <SectionOne>
                <h1>Prislista</h1>
            </SectionOne>
            <SectionTwo>
                <table>
                    <tr>
                        <th><h2>Dag</h2></th>
                        <th><h2>Tid</h2></th>
                        <th><h2>Pris</h2></th>
                    </tr>
                    <tr>
                        <td>Måndag - Tisdag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>3 950:-</td>
                    </tr>
                    <tr>
                        <td>Tisdag - Onsdag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>3 950:-</td>
                    </tr>
                    <tr>
                        <td>Onsdag - Torsdag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>3 950:-</td>
                    </tr>
                    <tr>
                        <td>Torsdag - Fredag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>3 950:-</td>
                    </tr>
                    <tr>
                        <td>Söndag - Måndag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>3 950:-</td>
                    </tr>
                    <tr>
                        <td>Fredag - Lördag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>6 900:-</td>
                    </tr>
                    <tr>
                        <td>Lördag - Söndag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>9 495:-</td>
                    </tr>
                    <tr>
                        <td>Fredag - Söndag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>11 950:-</td>
                    </tr>
                    <tr>
                        <td>Fredag - Måndag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>12 750:-</td>
                    </tr>
                    <tr>
                        <td>Extra vardag</td>
                        <td>kl 12.00 - 12.00</td>
                        <td>1 495:-</td>
                    </tr>
                </table>
            </SectionTwo>
            <SectionThree>
                <p>Kontakta oss för priser kring högtider.</p>
                <br/>
                <h3><u>Erbjudande!</u></h3>
                <p>
                    Boka en fredag en helg där lördagen redan är bokad och betala endast <b>5 000 kronor</b>.
                </p>
                <br/>
                <h3><u>Deposition</u></h3>
                <p>
                    En depositionsavgift på <b>2500 SEK</b> läggs på fakturan och gäller som säkerhet under hyresperioden.
                    När hyrestiden tagit slut och hyresgästen återställt lokalen i godtagbart skick återfås
                    depositionsavgiften.
                </p>
            </SectionThree>
        </PriceWrapper>
    )
}

export default Pris

const PriceWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'El Messiri', sans-serif;
`

const SectionOne = styled.section`
  padding: 50px;
  
  h1 {
    font-size: 50px;
  }

  @media (max-width: 1100px) {
    padding: 20px 10px;

    h1 {
      font-size: 35px;
    }
  }
`

const SectionTwo = styled.section`
  margin: 0 50px;
  font-family: 'Oxygen - Regular', sans-serif;

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
    margin: 0;
  }
`

const SectionThree = styled.section`
  padding: 50px;

  p {
    font-size: 19px;
  }

  @media (max-width: 1100px) {
    padding: 50px 10px;
  }
`