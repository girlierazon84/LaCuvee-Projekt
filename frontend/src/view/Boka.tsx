import React from 'react'
import styled from 'styled-components'

const Boka = () => {
    return (
        <BookWrapper>
            <SectionOne>
                <h1>Boka</h1>
            </SectionOne>
        </BookWrapper>
    )
}

export default Boka

const BookWrapper = styled.section`
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