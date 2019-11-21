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

  @media screen and (max-width: 800px) {
    width: 44vw;

    &:hover {
      button {
        opacity: unset;
      }

      .image {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustumButton)`
  width: 80%;
  position: absolute;
  top: 255px;
  opacity: 0.7;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    padding: 0 10px;
    opacity: 0.9;
  }
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
