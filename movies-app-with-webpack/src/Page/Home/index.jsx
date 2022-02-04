import React, { useEffect } from 'react';

// Components
import ComingSoon from '../../Components/ComingSoon/index.jsx';
import GridMovies from '../../Components/GridMovies/index.jsx';
// Styles
import { ContentHome } from './HomeStyles.js';
import { Content } from '../../Styles/Globals/ContentPage.js'

const Home = () => {


  return (
    <Content>
      <ComingSoon />
      <GridMovies />
    </Content>
  )
};

export default Home;
