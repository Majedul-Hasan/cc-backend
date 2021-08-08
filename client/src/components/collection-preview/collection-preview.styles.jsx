import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
   align-items: center;
   @media screen and (min-width: 768px){
      align-items: unset;
   }

`

export const Title = styled.h1`
   font-size: 28px;
   margin-bottom: 25px;
   cursor: pointer;
`
export const PreviewContainer = styled.div`
   display: grid;
   grid-template-columns: repeat( 2, minmax(250px, 1fr) );
   grid-gap: 15px;

@media screen and (min-width: 768px){
      display: flex;
      justify-content: space-between;
}

`