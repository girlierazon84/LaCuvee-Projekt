import styled from 'styled-components'

interface Props {
    open: boolean
}

export const StyledBurger = styled.div<Props>`
  display: none;
  z-index: 20;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 37px;
  right: 10px;
  
  @media (max-width: 1100px) {
    //position: fixed;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#660000' : '#E6E6E6'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`