import React, { useContext, useCallback, useState } from "react";
import { View, Alert } from "react-native";
import { MainContext } from "../../reducer/MainContext";
import ScrollViewComponent from "./components/ScrollView";
import { styles } from "./Styles";
import { HeaderText, Text } from "../../components";
import { useFocusEffect } from "@react-navigation/native";

const Cart = () => {
  const { state, dispatch } = useContext(MainContext);
  const [data, setData] = useState([]);

  useFocusEffect(useCallback(() => {}, []));

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
    setData(data.filter((item: any) => item.product.id != id));
    Alert.alert("Product", "Product was removed from the cart");
  };

  const calculateTotal = () => {
    let total = 0;
    state.cart.map((item) => {
      let amount = 0;
      amount = item.product.price * item.qty;
      total += amount;
    });
    return total;
  };

  return (
    <View style={{ flex: 1 }}>
      {state.cart.length > 0 && (
        <ScrollViewComponent data={state.cart} removeProduct={removeProduct} />
      )}
      <View style={styles.total}>
        <HeaderText style={styles.total_label}>Total</HeaderText>
        <Text style={styles.total_value}>
          ${state.cart.length > 0 ? calculateTotal() : 0}
        </Text>
      </View>
    </View>
  );
};

export default Cart;
