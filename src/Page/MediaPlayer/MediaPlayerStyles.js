import styled from "styled-components";


export const ContentMediaPlayer = styled.section`
  background: ${ props => props.theme.colors.dark };
  min-height: 100vh;
  height: 100%;
  width:100%;
  position: relative;
  .frameVideo {
    background: ${ props => props.theme.colors.gray[10]};
    height: ${ props => (props.widthClient * 315) / 560 }px;
    max-height: 600px
  }
  .title {
    padding: 10px 15px;
  }
` 