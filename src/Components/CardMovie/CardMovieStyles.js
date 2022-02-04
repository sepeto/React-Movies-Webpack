import styled from "styled-components";
import { Card } from "../../Styles/Globals/Card.js";
import { ButtonPlayGlobal } from "../../Styles/Globals/ButtonPlayGlobal.js";

export const ContentCardMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px 0;
  margin: 20px 0;
  min-width: 300px;
  
`

export const ItemMovie = styled(Card)`
  min-width: 150px;
  max-width : 190px;
  height: 240px;
  padding: 0;
  display: flex;
  align-items: flex-end;
  @media (min-width: ${ props => props.theme.breakpoints.mobileM }) {
    height: 260px;
  }
  @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
    height: 300px;
    max-width: 190px;
  }
  @media (min-width: ${ props => props.theme.breakpoints.laptop }) {
    height: 320px;
    max-width: 210px;
  }
`
export const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 13px 8px 10px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${ props => props.theme.colors.opacity[60] };
    height: 100%;
    width: 100%;
    border-radius: 0 0 14px 14px;
  }
`

export const InfoMovie = styled.div`
  width: 75%;
  color: ${ props => props.theme.colors.light };
  position: relative;
  .title {
    width: 105px;
    overflow:hidden;
    word-break: break-all;  
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3; 
  }
`

export const ButtonPlay = styled(ButtonPlayGlobal)`
  min-width: 30px;
  height: 30px;
  padding: 0;
  align-self: flex-end;
  position: relative;

`