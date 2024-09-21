import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

const CheckBoxComponent = (props) => {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: props.left ? "row" : "row-reverse" },
      ]}
    >
      <Text style={{ marginHorizontal: 10 }}>{props.left || props.right}</Text>
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
