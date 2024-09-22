import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useContext } from "react";
import { MainContext } from "../reducer/MainContext";

const CheckBoxComponent = (props) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;

  return (
    <View
      style={[
        styles.container,
        { flexDirection: props.left ? "row" : "row-reverse" },
      ]}
    >
      <Text
        style={{
          marginHorizontal: 10,
          color: currentTheme === "dark" ? "white" : "black",
        }}
      >
        {props.left || props.right}
      </Text>
      <Checkbox
        value={props.value}
        onValueChange={() => props.onValueChange()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default CheckBoxComponent;
