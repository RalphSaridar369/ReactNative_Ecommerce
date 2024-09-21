import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { HeaderText, Text } from "../../../components";

const FlatlistComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderText style={styles.header_text}>{props.headerText}</HeaderText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.product_image_container}
            onPress={() =>
              props.navigation.navigate("Products", {
                screen: "productDetails",
                params: { product: item },
              })
            }
          >
            <Image
              source={item.image}
              style={styles.product_image}
              resizeMode="contain"
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header_text: {
    fontSize: 20,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  product_image_container: {
    width: 200,
    display: "flex",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "lightgray",
    borderRadius: 20,
    padding: 20,
    paddingBottom: 10,
  },
  product_image: {
    width: 150,
    height: 150,
  },
  text: {
    marginVertical: 0,
    width: "80%",
  },
});

export default FlatlistComponent;
