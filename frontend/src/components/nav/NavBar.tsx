import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import LaCuveeLogo from '../../utils/images/LaCuveeLogo.png'
import RoutingPath from "../../routes/RoutingPath";
import Burger from "./Burger";

const NavBar: React.FC = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Nav>
            <Link to={ RoutingPath.homeView}>
                <img className="LC__logo"
                     src={ LaCuveeLogo }
                     alt='La_Cuvée Logo'/>
            </Link>
            <Burger open={ open } setOpen={ setOpen } />
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
  width: 100%;
  height: 110px;
  background-color: var(--secondary-color);
  background-image: linear-gradient(to bottom, var(--thirdly-color), var(--secondary-color));
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-bottom: 2px solid var(--secondary-color);
  
  .LC__logo {
    width: 20em;
    padding: 10px;
  }
`
