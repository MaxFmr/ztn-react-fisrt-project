import { SHOP_DATA } from "/Users/maxime/Desktop/project-1/src/redux/shop/shop.data.js";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
