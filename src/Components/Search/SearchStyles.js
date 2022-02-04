import styled from "styled-components";
import { ContentIconsGlobal } from "../../Styles/Globals/Icons.js";
import { ContentNav } from "../../Styles/Globals/ContentNav.js";

export const ContentSearch = styled(ContentNav)`
  transform: ${props => props.isOpen ? ' translateX(0)': 'translateX(100%)'};
  box-shadow: ${ props => props.isOpen ? '-10px 0 20px 0px #8383831f': 'none' };
`
export const ContentIcon = styled(ContentIconsGlobal)`
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
`

export const ContentForm = styled.form`
  display: flex;

  .inputTitle{
    background: ${ props => props.theme.colors.gray[30] };
    padding: 10px 12px;
    border-radius: ${ props => props.theme.radius.s };
    width: 100%;
    color: ${ props => props.theme.colors.light};
    &::placeholder {
      color: ${ props => props.theme.colors.gray[70] }
    }
  }
`

export const ButtonSubmit = styled(ContentIconsGlobal)`
  background: ${ props => props.theme.colors.secondary[1]};
  border-radius: ${ props => props.theme.radius.s};
  margin: 0 0 0 10px;
  line-height: 0;
`

export const ContentResultSearch = styled.div`
  margin: 30px 0 0 0;
  .contentCards {
    overflow-y: auto;
    max-height: 400px;
    padding: 0 0 40px 0;
  }
  .notFound{
    color: ${ props => props.theme.colors.light }
  }
`