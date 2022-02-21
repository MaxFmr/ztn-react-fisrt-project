import "/Users/maxime/Desktop/project-1/src/components/cart-item/cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name} </span>
        <span className="name">
          {quantity}X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;