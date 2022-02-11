import React from "react";

import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";

const CollectionPreview = ({ title, items, id }) => {
  console.log(items);
  return (
    <div className="collection-preview" key={id}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem item={item} />;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
