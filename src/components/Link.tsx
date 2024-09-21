import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LinkComponent = (props) => {
  const chosenStyles = props.settings.map((item) => styles[item]);
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
      <Text style={[chosenStyles, props.textStyle]}>{props.text}</Text>
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
