import styled from "styled-components"

export const ContentNav = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${ props => props.theme.colors.dark };
  padding: 20px 15px;
  z-index: 12;
  transform: ${props => props.isOpen ? ' translateX(0)': 'translateX(100%)'};
  transition: all .3s linear;
  @media (min-width: ${ props => props.theme.breakpoints.laptop }) {
    width: 50%;
    left: unset;
    right: 0px;
    padding: 30px 25px;
  }
`
