import styled from "styled-components";

export const Title = styled.h3`
  color: ${ props => props.theme.colors.light };
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 10px;
`

export const TitleMovie = styled.h2`
  font-size: 16px;
  font-weight:500;
  line-height: 16px;
  margin: 0;
  color: ${ props => props.theme.colors.light };
  @media (min-width: ${ props => props.theme.breakpoints.laptop } ) {
    font-size: 20px
  }
`

export const RatingMovie = styled.span`
  font-size: 12px;
  color: ${ props => props.theme.colors.light };
  display: inline-block;
  margin: 0 0 5px;
  @media (min-width: ${  props => props.theme.breakpoints.laptop} ) {
    font-size: 14px
  }
  .iconStar {
    color: ${ props => props.theme.colors.secondary[2] };
    font-size: 16px;
    vertical-align: middle;
    line-height: 16px;
    @media (min-width: ${  props => props.theme.breakpoints.laptop} ) {
      font-size: 18px
  }
  }
`