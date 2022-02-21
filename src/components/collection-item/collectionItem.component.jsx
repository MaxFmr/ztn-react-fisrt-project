import "/Users/maxime/Desktop/project-1/src/components/collection-item/collectionItem.styles.scss";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../customp-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <div key={item.id} className="collection-item">
      <div className="collection-item">
        <div
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          className="image"
        />
        <div className="collection-footer">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}$</span>
        </div>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        ADD to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { addItemToCart: (item) => dispatch(addItemToCart(item)) };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
