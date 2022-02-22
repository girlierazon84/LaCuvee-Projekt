import React from 'react'
import styled from 'styled-components'
import ImageSlideShow from '../components/slideshow/ImageSlideShow';
import HomeText from "../components/hem/HomeText";


const Home = () => {
    return (
        <HomeWrapper>
            <ImageSlideShow/>
            <HomeText/>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.section`
  margin: 0 20px;
  padding: 0;

  @media (max-width: 1100px) {
    margin: 0;
  }
`