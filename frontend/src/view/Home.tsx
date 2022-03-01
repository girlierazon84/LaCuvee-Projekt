import React from 'react'
import styled from 'styled-components'
import ImageSlideShow from '../components/slideshow/ImageSlideShow';
import HomeText from "../components/hem/HomeText";


const Home = () => {
    return (
        <HomeWrapper>
            <HomeText/>
            <ImageSlideShow/>
            <br/>
            <br/>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div`
  margin: 1px 20px;
  background-color: var(--fourthly-color);

  @media (max-width: 1100px) {
    margin: 1px;
  }
`
