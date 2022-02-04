import styled from "styled-components";

import { ContentIconsGlobal } from "../../Styles/Globals/Icons.js";

export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${ props => props.theme.colors.dark };
  padding: 20px 15px;
  @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
    padding: 20px 30px;
  }
`

export const Brand = styled.div`
  width: 60%;
  span { 
    color: ${ props => props.theme.colors.light};
    font-size: 24px;
    font-weight: 600;
  }
`

export const Menu = styled(ContentIconsGlobal)`
  width: 30%;
  .search {
    margin: 0 10px 0 0;
  }
`