import React from 'react'
import styled from 'styled-components'
import Table_Setting from "../utils/images/TableSetting.jpg";

const TableSetting = () => {
    
    return (
        <DukningWrapper>
            <SectionOne className='header'>
                <h1>Dukning</h1>
            </SectionOne>
    
            <SectionTwo className='image'>
                <img src={ Table_Setting } alt='La_Cuvée images'/>
            </SectionTwo>
            
            <SectionThree className='paragraph'>
                <p>
                    Det finns totalt <b>15 bord</b> och <b>120 stolar</b> för att möblera lokalen.
                    Man kan variera dukningen mycket; göra långbord, e-formationer eller
                    placera ut enstaka bord. Borden är av massiv valnöt. De är <b>240 cm långa
                    och 110 cm breda</b> och går att fälla ihop och flytta som man önskar.
                </p>
                <br/>
                <p>
                    Man kan sitta <b>6-8 personer</b> vid varje bord. Stolarna är i svart lack med
                    svart konstäder i sits och rygg. De är stapelbara och lätta att flytta.
                </p>
                <br/>
                <p>
                    Det finns en scen som är flyttbar, där många väljer att placera honnörsbordet.
                    Vi har <b>sex klädda stolar</b> speciellt för hedersgästerna och brudparet.
                </p>
                <br/>
                <p>
                    Önskar du att se fler bilder av lokalen? Ta en titt under fliken Bilder till vänster.
                </p>
                <br/>
                <p>
                    Här kan du se en ritning som visar hur salen ser ut och pelarna i salen är placerade.
                </p>
            </SectionThree>
        </DukningWrapper>
    )
}

export default TableSetting

const DukningWrapper = styled.section`
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
    height: 367px;
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