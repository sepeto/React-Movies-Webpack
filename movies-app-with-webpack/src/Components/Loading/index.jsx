import React from 'react';

// Styles
import { ContentLoader, Loader } from './LoadingStyles.js';

const Loading = ( { height, margin } ) => {
  

  return (
    <ContentLoader height = {height} margin = {margin}>
      <Loader className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </ContentLoader>
  )
};

export default Loading;
