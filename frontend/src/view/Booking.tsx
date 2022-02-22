import React from 'react'
import styled from 'styled-components'
import Eight from "../utils/images/8.jpg";

const Booking = () => {
    
    
    return (
        <BookingWrapper>
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
            <br/>
            <SectionFour>
                <h2>Februari 2022</h2>
                <table>
                    <tr>
                        <th>Mån</th>
                        <th>Tis</th>
                        <th>Ons</th>
                        <th>Tor</th>
                        <th>Fre</th>
                        <th>Lör</th>
                        <th>Sön</th>
                    </tr>
                    <tr>
                        <td><h3 className='grey__area'>31</h3></td>
                        <td><h3>01</h3></td>
                        <td><h3>02</h3></td>
                        <td><h3>03</h3></td>
                        <td className='booked'><h3>04</h3></td>
                        <td className='booked'><h3>05</h3></td>
                        <td className='booked'><h3>06</h3></td>
                    </tr>
                    <tr>
                        <td><h3>07</h3></td>
                        <td><h3>08</h3></td>
                        <td><h3>09</h3></td>
                        <td><h3>10</h3></td>
                        <td><h3>11</h3></td>
                        <td><h3>12</h3></td>
                        <td><h3>13</h3></td>
                    </tr>
                    <tr>
                        <td><h3>14</h3></td>
                        <td><h3>15</h3></td>
                        <td><h3>16</h3></td>
                        <td><h3>17</h3></td>
                        <td><h3>18</h3></td>
                        <td><h3>19</h3></td>
                        <td><h3>20</h3></td>
                    </tr>
                    <tr>
                        <td><h3>21</h3></td>
                        <td><h3>22</h3></td>
                        <td><h3>23</h3></td>
                        <td><h3>24</h3></td>
                        <td><h3>25</h3></td>
                        <td><h3>26</h3></td>
                        <td><h3>27</h3></td>
                    </tr>
                    <tr>
                        <td><h3>28</h3></td>
                        <td><h3 className='grey__area'>01</h3></td>
                        <td><h3 className='grey__area'>02</h3></td>
                        <td><h3 className='grey__area'>03</h3></td>
                        <td><h3 className='grey__area'>04</h3></td>
                        <td><h3 className='grey__area'>05</h3></td>
                        <td><h3 className='grey__area'>06</h3></td>
                    </tr>
                </table>
            </SectionFour>
        </BookingWrapper>
    )
}

export default Booking

const BookingWrapper = styled.section`
  margin: 1px 20px;
  box-sizing: border-box;
  background-color: var(--fourthly-color);
  color: var(--primary-color);
  text-align: justify;
  font-family: 'Oleo Script', sans-serif;
  display: grid;
  grid-template-rows: 150px 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'top top'
                    'left right'
                    'bottom bottom';

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
    padding: 20px 10px;

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
    border: 1px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    margin: 80px 10px;

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
    margin: 400px 10px;
  }
`

const SectionFour = styled.section`
  margin: 0 50px 80px 50px ;
  font-family: 'Oxygen - Regular', sans-serif;
  grid-area: bottom;
  
  h2 {
    text-align: center;
    border: 1px solid peachpuff;
    color: var(--secondary-color);
    text-transform: uppercase;
    background-color: #f2f2f2;
    line-height: 50px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  .grey__area {
    color: var(--fourthly-color);
  }
  
  td, th {
    border: 1px solid peachpuff;
    line-height: 40px;
  }

  tr {
    background-color: #f2f2f2;
  }
  
  tr:hover {background-color: #ddd;}

  th {
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
    color: var(--fourthly-color);
    text-align: center;
    width: 50px;
    //line-height: 30px;
  }
  
  td {
    color: var(--secondary-color);
    text-align: center;
    //line-height: 30px;
  }
  
  .booked {
    background-color: red;
  }

  @media (max-width: 1100px) {
    margin: 1000px 0 30px 0;
  }
`