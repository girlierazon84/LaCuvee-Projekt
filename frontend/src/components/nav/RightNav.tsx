import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, List, ListItem } from "@material-ui/core";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import RoutingPath from "../../routes/RoutingPath";

interface Props {
    open: boolean
}

const RightNav: React.FC<Props> = ({ open }) => {
    const [openMenu, setOpenMenu] = React.useState(false)

    function handleClick() {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <Ul open={ open }>
                <LiRight>
                    <Link to={ RoutingPath.bokaView }>
                        <ListItemText className='nav__links' primary='Boka'/>
                    </Link>
                </LiRight>

                <LiRight>
                    <Link to={ RoutingPath.prisView }>
                        <ListItemText className='nav__links' primary='Pris'/>
                    </Link>
                </LiRight>

                <LiRight>
                    <ListItem className='tjänster__arrows' onClick={ handleClick }>
                        <ListItemText className='tjänster'
                                      primary='Produkter och Tjänster'  />
                        { openMenu ? <ArrowDropUpSharpIcon className='arrow__up'/> : <ArrowDropDownSharpIcon className='arrow__down'/>  }
                    </ListItem>
                    <Collapse in={ openMenu }  timeout='auto'  unmountOnExit>
                        <List className='dropdown__lists'>
                            <ListItem className='list__items festlokal'>
                                <Link className='links' to={ RoutingPath.festlokalView }>
                                    <ListItemText className='festlokal' primary='Festlokal'/>
                                </Link>
                            </ListItem>
                            <ListItem className='list__items'>
                                <Link className='links' to={ RoutingPath.vinkallareView }>
                                    <ListItemText primary='Vinkällare'/>
                                </Link>
                            </ListItem>
                            <ListItem className='list__items'>
                                <Link className='links' to={ RoutingPath.dukningView }>
                                    <ListItemText primary='Dukning'/>
                                </Link>
                            </ListItem>
                            <ListItem className='list__items  utrustning'>
                                <Link className='links' to={ RoutingPath.utrustningView }>
                                    <ListItemText primary='Utrustning'/>
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </LiRight>

                <LiRight>
                    <Link to={ RoutingPath.kontaktView }>
                        <ListItemText className='nav__links' primary='Kontakt'/>
                    </Link>
                </LiRight>

                <LiRight>
                    <Link to={ RoutingPath.omOssView }>
                        <ListItemText className='nav__links' primary='Om oss'/>
                    </Link>
                </LiRight>

                <LiRight>
                    <Link to={ RoutingPath.hemView }>
                        <ListItemText className='nav__links' primary='Hem'/>
                    </Link>
                </LiRight>
            </Ul>
        </>
    )
}

export default RightNav

const Ul = styled.ul<Props>`
  list-style: none;
  flex-flow: row nowrap;
  margin-top: 38px;

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--fourthly-color);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-top: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

const LiRight = styled.li`
  float: right;
  cursor: pointer;
  padding: 0 20px;
  
  a {
    text-decoration: none;
  }
  
  .nav__links {
    color: var(--fourthly-color);
  }
  
  .nav__links:hover {
    background-color: var(--fourthly-color);
    color: var(--secondary-color);
    border-radius: 10px;
    padding: 6px 10px;
  }
  
  .tjänster__arrows {
    padding: 0;
  }
  
  .dropdown__lists {
    position: fixed;
    overflow: visible;
    background-color: var(--secondary-color);
    color: var(--fourthly-color);
    width: 140px;
    top: 65px;
    right: 168px;
    border-radius: 10px;
  }
  
  .list__items {
    padding: 0;
  }

  .links {
    margin: 0 25px;
    color: var(--fourthly-color);
  }
  
  .links:hover {
    background-color: var(--fourthly-color);
    color: var(--secondary-color);
    border-radius: 10px;
    padding: 6px 10px;
  }
  
  @media (max-width: 1100px) {
    margin-top: 10px;
    
    .nav__links {
      margin-left: 19px;
      color: var(--secondary-color);
      padding: 0;
    }
    
    .nav__links:hover {
      background-color: var(--secondary-color);
      color: var(--fourthly-color);
      border-radius: 10px;
      padding: 5px 7px;
    }

    .tjänster__arrows {
      color: var(--secondary-color);
      margin-left: 18px;
    }
    
    .arrow__down,
    .arrow__up {
      position: fixed;
      margin-left: 165px;
    }
    
    .dropdown__lists {
      width: 120px;
      top: 176px;
      right: 260px;
    }

    .links {
      color: var(--fourthly-color);
      margin: 0 12px;
    }
  }
`