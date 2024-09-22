import { Text, TouchableOpacity, StyleSheet } from "react-native";
import useTheme from "../helpers/useTheme";

const LinkComponent = (props) => {
  const currentTheme = useTheme();

  const chosenStyles = props.settings.map((item) => styles[item]);
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
      <Text
        style={[
          chosenStyles,
          props.textStyle,
          { color: currentTheme === "dark" ? "white" : props.textStyle },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

// <------ STYLES CHANGES DEPENDING ON PROPS ------>

const styles = StyleSheet.create({
  null: {
    color: "#fff",
  },
  primary: {
    color: "#FF6863",
  },
  danger: {
    color: "red",
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default LinkComponent;
