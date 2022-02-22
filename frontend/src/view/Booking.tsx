import React from 'react'
import styled from 'styled-components'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Booking = () => {
    
    
    return (
        <BookingWrapper>
            <SectionOne>
                <h1>Boka</h1>
            </SectionOne>
            <SectionTwo>
            </SectionTwo>
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
  font-family: 'El Messiri', sans-serif;

  @media (max-width: 1100px) {
    margin: 1px;
  }
`

const SectionOne = styled.section`
  padding: 50px;

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
  padding: 50px;
  
  @media (max-width: 1100px) {
    padding: 20px;
  }
`