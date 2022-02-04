import React from 'react';
import { Link } from 'react-router-dom';

import { ContentNavMenu, ContentArrow, ContentList } from './NavMenuStyles';

import { MdChevronRight } from 'react-icons/md';

const Nav = ({ isOpen, onClose }) => {
  return (
    <ContentNavMenu isOpen= {isOpen} >
      <ContentArrow onClick={ onClose } >
      <MdChevronRight />
      </ContentArrow>
      <ContentList>
        <li onClick={ onClose }>
          <Link to='/about' >About Us</Link>
        </li>
        <li onClick={ onClose }>
          <Link to='/team' >Team</Link>
        </li>
        <li onClick={ onClose }>
          <Link to='/contact' >Contact us</Link>
        </li>
      </ContentList>
    </ContentNavMenu>
  )
};

export default Nav;
