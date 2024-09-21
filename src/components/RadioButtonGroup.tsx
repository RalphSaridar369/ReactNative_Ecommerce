import { RadioButton } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const RadioButtonG = ({ items, ...props }) => {
  return (
    <RadioButton.Group
      value={props.value}
      onValueChange={props.onValueChange}
      {...props}
    >
      <View style={props.containerStyle}>
        {items.map((item, index) => {
          return (
            <View key={index} style={styles.radioContainer}>
              <RadioButton value={item.value} />
              <Text
                style={styles.text}
                onPress={() => props.onValueChange(item.value)}
              >
                {item.text}
              </Text>
            </View>
          );
        })}
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "OpenSans-Bold",
  },
});

export default RadioButtonG;
