import styled from "styled-components";

export const Content = styled.section`
  background: ${ props => props.theme.colors.dark };
  height: 100%;
  min-width: 300px;
  min-height: 100vh;
  color: ${ props => props.theme.colors.light };
  padding: 0 15px 20px;
  @media (min-width: ${ props => props.theme.breakpoints.laptop }) {
    padding: 0 25px 25px;
  }
  @media (min-width: ${ props => props.theme.breakpoints.laptop }) {
    padding: 0 30px 30px;
  }
`