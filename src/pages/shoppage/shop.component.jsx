import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";

import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
