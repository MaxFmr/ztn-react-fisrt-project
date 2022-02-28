import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collectionItem.component";

import "./collection.styles.scss";

const Collection = ({ collections }) => {
  const { routeName } = useParams();

  return (
    <>
      {collections.map((collection) => {
        return (
          routeName === collection.routeName && (
            <div key={collection.id} className="collection-page">
              <h2 className="title">{collection.title}</h2>
              <div className="items">
                {collection.items.map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Collection);
