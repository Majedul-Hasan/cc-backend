import React from 'react';
// import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, linkUrl  }) => (
  <div className='collection-preview' 
  // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >

    <h1 className='title'>{title.toUpperCase()}</h1>
    
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
