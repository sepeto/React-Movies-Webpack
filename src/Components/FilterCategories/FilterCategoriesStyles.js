import styled from "styled-components";

export const ContentFilterCategories =  styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  gap: 0 5px;
  padding: 0 0 10px 0;
  &::-webkit-scrollbar {
    height: 5px;
    background: ${ props => props.theme.colors.gray[10] };
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background:  ${ props => props.theme.colors.gray[50] };
  }
`

export const Category = styled.li`
  font-size: 13px;
  color: ${ props => props.theme.colors.light };
  padding: 10px 12px;
  height: fit-content;
  width: fit-content;
  display: inline-block;
  white-space: nowrap;
  background: ${ props => props.theme.colors.gray[10] };
  border-radius: ${ props => props.theme.radius.s };
  transition: all .3s linear;
  @media (min-width: ${ props => props.theme.breakpoints.tablet }) {
    font-size: 15px
  }
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    cursor: pointer;
  }
`