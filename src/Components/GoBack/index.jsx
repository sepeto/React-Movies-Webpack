import React from 'react';
// Styles
import { ContentGoBack } from './GoBackStyles.js'
// Icons
import { useNavigate } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

const GoBack = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  }
  return (
    <ContentGoBack onClick={handleNavigation} >
      <MdChevronLeft />
    </ContentGoBack>
  )
};

export default GoBack;
