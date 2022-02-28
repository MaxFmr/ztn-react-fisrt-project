import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

const ShopPage = ({}) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
