import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Image, Alert } from "react-native";
import { Text, HeaderText, TouchableOpacity } from "../../../components";
import { MainContext } from "../../../reducer/MainContext";
import CartButtons from "./components/CartButtons";
import { styles } from "./Styles";
import { useIsFocused } from "@react-navigation/native";

interface IProduct {
  image: number;
  name: string;
  price: number;
}

const ProductDetails = ({ route }) => {
  const isFocused = useIsFocused();
  const [product, setProduct] = useState<IProduct>();
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    if (isFocused) {
      setProduct(route.params.product);
      setCount(0);
    }
  }, [route, isFocused]);

  const confirmAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        data: {
          product: route.params.product,
          qty: count,
          total: count * route.params.product.price,
        },
      },
    });
    Alert.alert("Product", "Product added successfully");
  };

  const addToCart = () => {
    if (count < 1) Alert.alert("Error", "Please add the product first");
    else
      Alert.alert("Add to cart", "Are you sure you want to add to cart?", [
        { text: "No" },
        { text: "Yes", onPress: () => confirmAddToCart() },
      ]);
  };

  const addOrRemove = (type) => {
    setCount(type == "add" ? count + 1 : count != 0 ? count - 1 : 0);
  };
  return (
    <View style={styles.main}>
      {product && (
        <ScrollView>
          <Image
            source={product?.image}
            style={styles.product_image}
            resizeMode="contain"
          />
          <View style={styles.content_container}>
            <HeaderText style={styles.product_name}>{product?.name}</HeaderText>
            <Text style={styles.product_description}>
              A product description is the marketing copy that explains what a
              product is and why it's worth purchasing. The purpose of a product
              description is to supply customers with important information
              about the features and benefits of the product so they're
              compelled to buy.
            </Text>
            <Text>${product?.price}</Text>
            {state?.UserData?.usertype == 1 && (
              <View style={styles.items_container}>
                <CartButtons
                  style={styles.buttons_container}
                  add={() => addOrRemove("add")}
                  remove={() => addOrRemove("remove")}
                  count={count}
                />
                <View style={styles.total_container}>
                  <HeaderText style={styles.total_label}>Total</HeaderText>
                  <HeaderText style={styles.total_value}>
                    ${count * product?.price}
                  </HeaderText>
                </View>
              </View>
            )}
          </View>
          {state?.UserData?.usertype == 1 && (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                settings={["primary"]}
                text="Add to cart"
                onPress={addToCart}
              />
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetails;
