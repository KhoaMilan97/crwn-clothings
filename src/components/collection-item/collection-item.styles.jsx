import styled from "styled-components";

import CustumButton from "../custom-button/custom-button";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    button {
      display: flex;
      opacity: 0.85;
    }

    .image {
      opacity: 0.8;
    }
  }
`;

export const AddButton = styled(CustumButton)`
  width: 80%;
  position: absolute;
  top: 255px;
  opacity: 0.7;
  display: none;
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;
