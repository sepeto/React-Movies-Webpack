import React from 'react';

import { Content } from '../../Styles/Globals/ContentPage';
import GoBack from '../../Components/GoBack/index.jsx';

const About = () => {

  document.title = 'eflix | About';

  return (
    <Content>
      Page About
      <GoBack />
    </Content>
  )
};

export default About;
