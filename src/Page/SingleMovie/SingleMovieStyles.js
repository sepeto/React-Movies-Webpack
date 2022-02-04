import styled from "styled-components";
import { RatingMovie } from "../../Styles/Globals/Title.js";

export const ContentSingleMovie = styled.section`
  background: ${ props => props.theme.colors.dark };
  min-height: 100vh;
  height: 100%;
  padding: 0 0 30px 0;
  width: 100%;
`

export const HeroMovie = styled.div`
  background: url( ${ props => props.img } ) center no-repeat;
  width: 100%;
  height: 250px;
  position: relative;
  background-size: cover;
  @media (min-width:${ props => props.theme.breakpoints.tablet} ) {
    height: 400px; 
  }
  @media (min-width:${ props => props.theme.breakpoints.laptop} ) {
    height: 450px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${ props => props.theme.colors.opacity[50] };
  }
`

export const PosterMovie = styled.div`
  width: 100px; 
  height: 150px;
  position: relative;
  margin: 0 0 0 auto;
  position: absolute;
  bottom: 110px;
  right: 15px;
  transform: translateY(115%);
  background: ${ props => props.theme.colors.gray[10]};
  border-radius: ${ props => props.theme.radius.xs };
  z-index: 5;
  cursor: pointer;
  @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
    width: 135px;
    height: 200px;
    bottom: 140px;
    right: 30px;
  }
  img {
    border-radius: ${ props => props.theme.radius.xs };
    width: 100%;
    object-fit: contain;
  }
  .btnPlay {
    width: 35px;
    height: 35px;
    position: absolute;
    top: calc(50% - 17.5px);
    left: calc(50% - 17.5px);
  }
`

export const StatisticsMovie = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: 30px;
  left: 15px;
`

export const RuntimeMovie = styled(RatingMovie)`
  display: inline-block;
  margin: 0 0 0 20px;
`

export const BodyMovie = styled.div`
  padding: 20px 15px;
  @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
    padding: 30px;
  }
  .titleMovie {
    font-size: 20px;
    line-height:20px;
    max-width: calc(100% - 130px) ;
    @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
      font-size: 24px;
    }
  }
`

export const ListCategories = styled.ul`
  margin: 40px auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  height: auto;
  padding: 10px;
  background: ${ props => props.theme.colors.gray[10] };
  border-radius: ${ props => props.theme.radius.s };
  color: ${ props => props.theme.colors.light };
  li {
    font-size: 12px;
    white-space: nowrap;
    background-color: ${ props => props.theme.colors.gray[30]};
    padding: 5px 8px;
    border-radius: ${ props => props.theme.radius.s };
    @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
      font-size: 14px;
    }
  }
`

export const Overview = styled.div`

  .overview {
    font-size: 14px;
    color: ${ props => props.theme.colors.gray[70]};
    @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
      font-size: 16px;
    }
  }
`