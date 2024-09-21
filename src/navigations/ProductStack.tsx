import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../screens/Products/ProductList/Products";
import ProductDetails from "../screens/Products/ProductDetails/ProductDetails";

const PStack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <PStack.Navigator>
      <PStack.Screen
        name="products"
        component={Products}
        options={{ headerShown: false }}
      />
      <PStack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </PStack.Navigator>
  );
};

export default ProductStack;
