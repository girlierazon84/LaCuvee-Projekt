import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    return (
        <FooterWrapper>
            <GridContainerOne>
                <h5><u>Nå oss här:</u></h5>
                <div className='email'>
                    <i className="far fa-envelope"/>
                    <h6>www.lacuvee@tokali.se</h6>
                </div>
                <div className='telefon__nummer'>
                    <i className="fas fa-phone-alt"/>
                    <h6>031 799 78 78</h6>
                </div>
                <div className='mobil__nummer'>
                    <i className="fas fa-mobile-alt"/>
                    <h6>0768 024 032</h6>
                </div>
                <div className='adress'>
                    <a href='https://www.google.se/maps/dir//%C3%84ttestigen+8,+416+74+G%C3%B6teborg/@57.7211198,12.0289178,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x464ff46d76c6d27d:0x6d942f215324f303!2m2!1d12.0311065!2d57.721117?hl=sv'>
                        <i className="fas fa-map-marker-alt"/>
                        <h6>Ättestigen 8, 41674 Göteborg</h6>
                    </a>
                </div>
            </GridContainerOne>

            <GridContainerTwo>
                <h5><u>Följa oss:</u></h5>
                <div className='social__media__container'>
                    <a href='https://www.facebook.com/lacuveefestlokal/'>
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a href='#'>
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href='#'>
                        <i className="fab fa-youtube"/>
                    </a>
                    <a href='#'>
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href='#'>
                        <i className="fab fa-snapchat-ghost"/>
                    </a>
                    <a href='#'>
                        <i className="fab fa-pinterest"/>
                    </a>
                </div>
            </GridContainerTwo>

            <GridContainerThree>
                <div className='copyright__container'>
                    <h5>LC</h5>
                    <i className="far fa-copyright"/>
                    <h5 className='year'>2022</h5>
                </div>
            </GridContainerThree>
        </FooterWrapper>
    )
}
export default Footer

const FooterWrapper = styled.section`
  width: 100%;
  text-align: center;
  background-color: var(--secondary-color);
  background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
  font-family: "Oleo Script", serif;
`

const GridContainerOne = styled.div`
  padding-top: 15px;

  h5 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  h6 {
    color: var(--fourthly-color);
    font-size: 18px;
  }
  
  .email,
  .telefon__nummer,
  .mobil__nummer,
  .adress {
    display: inline-grid;
    margin: 10px 20px;
  }
  
  .fa-envelope,
  .fa-phone-alt,
  .fa-mobile-alt,
  .fa-map-marker-alt {
    font-size: 18px;
    color: dodgerblue;
    padding-bottom: 5px;
  }
  
  a {
    text-decoration: none;
    color: var(--fourthly-color);
  }

  @media (max-width: 1100px) {
    .email,
    .telefon__nummer,
    .mobil__nummer,
    .adress {
      display: grid;
      margin: 15px 0;
    }
  }
`

const GridContainerTwo = styled.div`
  padding-top: 15px;

  h5 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .social__media__container {
    margin-top: 10px;
  }

  .fa-facebook-f {
    color: blue;
  }

  .fa-instagram {
    color: fuchsia;
  }

  .fa-youtube {
    color: red;
  }

  .fa-twitter {
    color: royalblue;
  }

  .fa-snapchat-ghost {
    color: yellow;
  }

  .fa-facebook-f,
  .fa-instagram,
  .fa-youtube,
  .fa-twitter,
  .fa-snapchat-ghost,
  .fa-pinterest {
    font-size: 20px;
    padding-right: 20px;
  }
`

const GridContainerThree = styled.div`
  margin-top: 20px;
  
  .copyright__container {
    display: inline-flex;
  }

  .fa-copyright {
    color: dodgerblue;
    font-size: 10px;
    padding: 3px 5px;
  }
`