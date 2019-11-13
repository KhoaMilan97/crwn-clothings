import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemBackgroundImage,
  ContentContainer,
  TitleContainer,
  SubTittleContainer
} from "./Menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemBackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubTittleContainer>SHOP NOW</SubTittleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
