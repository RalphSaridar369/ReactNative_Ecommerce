import { StyleSheet, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../reducer/MainContext";

const TextComponent = (props) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;

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
