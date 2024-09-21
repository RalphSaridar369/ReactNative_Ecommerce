import { clearAll, storeData } from "../helpers/asyncStorage";
// reducer function

const mainReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      storeData("user", action.payload.UserData);
      return { ...state, UserData: action.payload.UserData, LoggedIn: true };
    case "SIGN_OUT":
      clearAll();
      return { ...state, UserData: null, LoggedIn: false };
    case "ADD_TO_CART":
      let cart = state.cart;
      let found = cart.find(
        (item) => item.product.id == action.payload.data.product.id
      );
      if (found) {
        found.qty += action.payload.data.qty;
      } else cart.push(action.payload.data);
      return { ...state, cart: cart };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id != action.payload.id),
      };
  }
};

export default mainReducer;
