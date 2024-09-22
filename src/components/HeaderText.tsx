import { StyleSheet, Text, Platform } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../reducer/MainContext";

const HeaderText = (props) => {
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
    fontSize: 30,
    marginTop: Platform.OS == "ios" ? 50 : 30,
    marginVertical: Platform.OS == "ios" ? 10 : 20,
    fontFamily: "OpenSans-Bold",
    color: "#FF6863",
  },
});

export default HeaderText;
