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
                    <i className="fas fa-map-marker-alt"/>
                    <h6>Ättestigen 8, 41674 Göteborg</h6>
                </div>
            </GridContainerOne>

            <GridContainerTwo>
                <h5><u>Följa oss:</u></h5>
                <div className='social__media__container'>
                    <i className="fab fa-facebook-f"/>
                    <i className="fab fa-instagram"/>
                    <i className="fab fa-youtube"/>
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-snapchat-ghost"/>
                    <i className="fab fa-pinterest"/>
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
`

const GridContainerOne = styled.div`
  padding-top: 15px;

  h5 {
    margin-bottom: 10px;
  }
  
  .email,
  .telefon__nummer,
  .mobil__nummer,
  .adress {
    display: inline-flex;
    margin: 0 20px;
  }
  
  .fa-envelope,
  .fa-phone-alt,
  .fa-mobile-alt,
  .fa-map-marker-alt {
    font-size: 15px;
    color: dodgerblue;
    padding: 1px 5px;
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

  h6 {
    color: var(--fourthly-color);
    font-size: 15px;
    font-family: "Oxygen - Regular", serif;
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