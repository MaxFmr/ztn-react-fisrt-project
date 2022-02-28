import React from "react";

import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";

import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
