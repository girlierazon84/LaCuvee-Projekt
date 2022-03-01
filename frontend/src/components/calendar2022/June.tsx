import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import RoutingPath from "../../routes/RoutingPath";
import Eight from "../../utils/images/8.jpg";

const June = () => {
    return (
        <MarchWrapper>
            <SectionOne>
                <h1>Boka</h1>
            </SectionOne>
            <SectionTwo>
                <Zoom>
                    <img src={ Eight } alt='La_Cuvée images' width='100%'/>
                </Zoom>
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
                <div className='calendar__header'>
                    <div className='arrow__left'>
                        <Link to={RoutingPath.mayView}>
                            <ChevronLeftSharpIcon className='left'
                                                  color='primary'
                                                  fontSize='large'
                                                  padding-top='inherit'/>
                        </Link>
                    </div>
                    <h2>Juni 2022</h2>
                    <div className='arrow__right'>
                        <Link to={RoutingPath.juneView}>
                            <ChevronRightSharpIcon className='right'
                                                   color='disabled'
                                                   fontSize='large'
                                                   padding-top='inherit'/>
                        </Link>
                    </div>
                </div>
                
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
                        <td><h3 className='grey__area'>30</h3></td>
                        <td><h3 className='grey__area'>31</h3></td>
                        <td><h3>1</h3></td>
                        <td><h3>2</h3></td>
                        <td><h3>3</h3></td>
                        <td><h3>4</h3></td>
                        <td><h3>5</h3></td>
                    </tr>
                    <tr>
                        <td><h3>6</h3></td>
                        <td><h3>7</h3></td>
                        <td><h3>8</h3></td>
                        <td><h3>9</h3></td>
                        <td><h3>10</h3></td>
                        <td><h3>11</h3></td>
                        <td><h3>12</h3></td>
                    </tr>
                    <tr>
                        <td><h3>13</h3></td>
                        <td><h3>14</h3></td>
                        <td><h3>15</h3></td>
                        <td><h3>16</h3></td>
                        <td><h3>17</h3></td>
                        <td><h3>18</h3></td>
                        <td><h3>19</h3></td>
                    </tr>
                    <tr>
                        <td><h3>20</h3></td>
                        <td><h3>21</h3></td>
                        <td><h3>22</h3></td>
                        <td><h3>23</h3></td>
                        <td><h3>24</h3></td>
                        <td><h3>25</h3></td>
                        <td><h3>26</h3></td>
                    </tr>
                    <tr>
                        <td><h3>27</h3></td>
                        <td><h3>28</h3></td>
                        <td><h3>29</h3></td>
                        <td><h3>30</h3></td>
                        <td><h3 className='grey__area'>1</h3></td>
                        <td><h3 className='grey__area'>2</h3></td>
                        <td><h3 className='grey__area'>3</h3></td>
                    </tr>
                </table>
            </SectionFour>
        </MarchWrapper>
    )
}

export default June

const MarchWrapper = styled.section`
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
    padding: 30px 20px;

    h1 {
      font-size: 35px;
    }
  }
`

const SectionTwo = styled.section`
  margin: 8px 0 0 0;
  grid-area: right;

  img {
    width: 97.5%;
    height: 304px;
    border: 2px solid var(--secondary-color);
  }

  @media (max-width: 1100px) {
    margin: 100px 20px;

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
    margin: 440px 20px;
  }
`

const SectionFour = styled.section`
  margin: 0 50px 80px 50px ;
  font-family: 'Oxygen - Regular', sans-serif;
  grid-area: bottom;

  .calendar__header {
    display: inline-flex;
    border: 1px solid peachpuff;
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
    width: 100%;
    padding: 10px 0;
  }

  h2 {
    padding-top: 10px;
    color: var(--fourthly-color);
  }

  .arrow__left,
  .arrow__right {
    margin: 5px 10px 0 10px;
  }

  .left,
  .right {
    border-radius: 50%;
    background-color: var(--fourthly-color);
  }

  .left:hover,
  .right:hover {
    background-color: #ddd;
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
    background-color: #f2f2f2;
    color: var(--secondary-color);
    text-align: center;
    width: 50px;
    text-transform: uppercase;
  }

  td {
    color: var(--secondary-color);
    text-align: center;
  }

  //.booked {
  //  background-color: red;
  //}

  @media (max-width: 1100px) {
    margin: 1080px 20px 0 20px;
  }
`