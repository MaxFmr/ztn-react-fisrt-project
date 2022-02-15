import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, title, items }) => {
          return <CollectionPreview id={id} items={items} title={title} />;
        })}
      </div>
    );
  }
}

export default ShopPage;