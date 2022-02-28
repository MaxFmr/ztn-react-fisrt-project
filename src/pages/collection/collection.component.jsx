import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import { useParams } from "react-router-dom";

const Collection = ({ collections }) => {
  const { routeName } = useParams();

  return (
    <>
      {collections.map((collection) => {
        return (
          routeName === collection.routeName && (
            <div key={collection.id}>
              <h2>{collection.title}</h2>
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
