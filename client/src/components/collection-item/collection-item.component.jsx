import React from 'react';
import { connect } from 'react-redux';


import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';
import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, FooterInfo,AddToCartBtn } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer >
      <ImageContainer className='image'
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <FooterInfo name={name}>{name}</FooterInfo>
        <FooterInfo >{price}</FooterInfo>
      </CollectionFooterContainer>
      <AddToCartBtn
        className='custom-button'
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
      </AddToCartBtn>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
