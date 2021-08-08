import styled from "styled-components";
import CustomButton from '../custom-button/custom-button.component';




export const CollectionItemContainer = styled.div`
   width: 40vw;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }


   @media screen and (min-width: 768px){
      width: 22vw;  

      &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }

      }
   }
`
   
export const ImageContainer = styled.div`
   background-image: ${({imageUrl})=>`url(${imageUrl})`} ;
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`
export const CollectionFooterContainer = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;

`
export const FooterInfo = styled.span`
   margin-bottom: 15px;
   width: ${({ name }) => (name ? '90%' : '10%')};

`
export const AddToCartBtn = styled(CustomButton)`
    width: 80%;
    opacity: 0.9;
    position: absolute;
    top: 255px;
    display: block;
    min-width: unset;
    padding: 0 10px;
    
@media screen and (min-width: 768px){
   display: none;
   opacity: 0.7;


}

 
`