import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Text } from "../../../components";
import { AntDesign } from "@expo/vector-icons";

const ScrollViewComponent = (props) => {
  const removeProduct = (id) => {
    Alert.alert("Product", "Are you sure you want to remove this product?", [
      { text: "No" },
      { text: "yes", onPress: () => props.removeProduct(id) },
    ]);
  };

  return (
    <ScrollView style={styles.scroll_view}>
      {props.data.map((item, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => removeProduct(item.product.id)}>
            <AntDesign
              name="closecircleo"
              size={24}
              color="#FF6863"
              style={styles.close_icon}
            />
          </TouchableOpacity>
          <Image
            source={item.product.image}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.name}>{item.product.name}</Text>
          <View style={styles.info_container}>
            <Text>
              {item.qty} * ${item.product.price}
            </Text>
            <Text style={styles.total_item}>
              ${item.qty * item.product.price}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll_view: {
    padding: 20,
    marginBottom: 80,
  },
  card: {
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  close_icon: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 100,
  },
  name: {
    // fontFamily: "OpenSans-Bold",
  },
  info_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total_item: {
    // fontFamily: "OpenSans-Bold",
    color: "#FF6863",
  },
});

export default ScrollViewComponent;
