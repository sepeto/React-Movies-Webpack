import styled from "styled-components";
import { ContentIconsGlobal } from '../../Styles/Globals/Icons.js';

export const ContentGoBack = styled(ContentIconsGlobal)`
  background: ${ props => props.theme.colors.light};
  color: ${ props => props.theme.colors.gray[10]};
  border-radius: ${ props => props.theme.radius.full};
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 25px;
  line-height: 32px;
  position: fixed;
  bottom: 20px;
  right: 15px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    cursor: pointer;
  }
`