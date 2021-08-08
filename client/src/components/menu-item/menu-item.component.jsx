import React from 'react';
import { withRouter } from 'react-router-dom';

// import './menu-item.styles.scss';

import {MenuItemCntainer, BackgroundImageContainer, ContentContainer, Title, Subtitle} from './menu-item.styles' 

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemCntainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'      
      imageUrl= {imageUrl}
    />
    <ContentContainer>
      <Title >{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </ContentContainer>
  </MenuItemCntainer>
);

export default withRouter(MenuItem);
