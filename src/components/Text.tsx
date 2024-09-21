import { StyleSheet, Text } from "react-native";
import React from "react";

const TextComponent = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "OpenSans-Medium",
    marginVertical: 20,
  },
});

export default TextComponent;
