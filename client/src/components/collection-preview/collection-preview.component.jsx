import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';
import { CollectionPreviewContainer,Title, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match  }) => (
  <CollectionPreviewContainer className="test"
  // onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
  // onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
  >

    <Title 
  
    // onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
     onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
    
    >{title.toUpperCase()}</Title>
    
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
