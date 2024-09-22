import { StyleSheet, Text } from "react-native";
import React from "react";
import useTheme from "../helpers/useTheme";

const TextComponent = (props) => {
  const currentTheme = useTheme();

  return (
    <Text
      style={[
        styles.text,
        props.style,
        { color: currentTheme === "dark" ? "white" : "black" },
      ]}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "OpenSans-Medium",
    marginVertical: 20,
  },
});

export default TextComponent;
