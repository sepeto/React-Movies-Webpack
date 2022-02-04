import styled from "styled-components"
import { ContentNav } from "../../Styles/Globals/ContentNav";
import { ContentIconsGlobal } from '../../Styles/Globals/Icons';


export const ContentNavMenu = styled(ContentNav)`
  transform: ${props => props.isOpen ? ' translateX(0)': 'translateX(100%)'};
  box-shadow: ${ props => props.isOpen ? '-10px 0 20px 0px #8383831f': 'none' };

  @media (min-width: ${ props => props.theme.breakpoints.laptop }) {
    width: 25%;
    left: unset;
    right: 0px;
    padding: 30px 25px;
  }
`

export const ContentArrow = styled(ContentIconsGlobal)`
  width: fit-content;
  margin: 0 0 20px auto;
  line-height:0;
  font-size: 30px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const ContentList = styled.ul`
  color: ${ props => props.theme.colors.light };
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  li { 
    cursor: pointer;
    font-size: 18px;
    position: relative;
    width: fit-content;
    &:before { 
      content: '';
      border-bottom: 2px solid ${ props => props.theme.colors.secondary[1]};
      width: 0%;
      height: 1px;
      position: absolute;
      background: rgb(217, 134,57,1);
      bottom: -2px;
      transition: all 0.3s linear;
    }
    &:hover::before {
      width: 100%;
    }
  }
`