import styled from "styled-components";

export const Card = styled.article`
  background-color: ${ props => props.theme.colors.gray[10] };
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${ props => props.theme.radius.xs };
  padding: 13px 15px;
  position: relative;
  width: 100%;
`