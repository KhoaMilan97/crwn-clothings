import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../collection-preview/collection-preview";

class ShopPages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...othercollection }) => (
          <CollectionPreview key={id} {...othercollection} />
        ))}
      </div>
    );
  }
}

export default ShopPages;
