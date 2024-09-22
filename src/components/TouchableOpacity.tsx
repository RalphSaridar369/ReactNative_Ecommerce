import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppStyles } from "../../AppStyle";
import useTheme from "../helpers/useTheme";

const TouchableOpacityComponent = (props) => {
  const chosenStyles = props.settings.map((item) => styles[item]);

  const currentTheme = useTheme();

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        chosenStyles,
        styles.base,
        props.style,
        {
          borderColor:
            currentTheme === "dark" ? "#fff" : AppStyles.light_color.color,
        },
      ]}
    >
      <Text
        style={{
          color:
            props.settings.includes("outlined") && currentTheme === "light"
              ? "#FF6863"
              : "white",
          fontFamily: "OpenSans-Medium",
          fontSize: 20,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

// <------ STYLES CHANGES DEPENDING ON PROPS ------>

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
    width: 200,
    alignItems: "center",
    borderRadius: 20,
  },
  null: {
    borderColor: undefined,
    borderWidth: 0,
  },
  primary: {
    borderColor: "#FF6863",
    backgroundColor: "#FF6863",
  },
  danger: {
    borderColor: "#313783",
    backgroundColor: "#313783",
  },
  outlined: {
    backgroundColor: undefined,
    borderColor: "#FF6863",
    borderWidth: 1,
  },
});

export default TouchableOpacityComponent;
