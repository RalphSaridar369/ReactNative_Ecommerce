import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { HeaderText } from "../../../../components";

const CartButtons = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={() => props.remove()}>
          <AntDesign name="minuscircleo" size={34} color="#FF6863" />
        </TouchableOpacity>
        <HeaderText style={styles.items}>{props.count}</HeaderText>
        <TouchableOpacity onPress={() => props.add()}>
          <AntDesign name="pluscircleo" size={34} color="#FF6863" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    marginTop: 0,
  },
});

export default CartButtons;
