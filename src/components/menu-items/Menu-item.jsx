import React from "react";
import { withRouter } from "react-router-dom";

import "./Menu-item.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  // console.log(history, match);
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
