import styled from "styled-components";
import { Title } from "../../Styles/Globals/Title.js";
import { Card } from "../../Styles/Globals/Card.js";
import { ButtonPlayGlobal } from "../../Styles/Globals/ButtonPlayGlobal.js";

export const ContentComingSoon = styled.div`
  margin: 0 0 20px;
  width: 100%;
  .contentSwiper {
    justify-content: center;
    .swiper-pagination-bullet {
      background: ${ props => props.theme.colors.gray[70] };
      opacity: 0.6;
    }
    .swiper-pagination-bullet-active {
      background: ${ props => props.theme.colors.secondary[1] };
      opacity: 1;
    }
    .swiper-wrapper {
      justify-content: center;
    }
    .swiper-wrapper {
      @media (min-width: ${ props => props.theme.breakpoints.laptopL }) {
        justify-content: space-around;
      }
    }
  }
`
export const ContentMovies = styled(Card)`
  height: 200px;
  width: 100%;
  max-width: 380px;
  @media (min-width: ${ props => props.theme.breakpoints.mobileM }) {
    height: 220px;
  }
  @media (min-width: ${ props => props.theme.breakpoints.laptopL }) {
    height: 300px;
    max-width: 450px;
  }
`
export const TitleMovie = styled(Title)`
  font-size: 16px;
  margin: 0;
`

export const ButtonPlay = styled(ButtonPlayGlobal)`
  height: 40px;
  left: calc(50% - 20px);
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
`