import { ScrollView, View } from "react-native";

const ScrollViewComponent = (props) => {
  return (
    <ScrollView
      style={[{ flex: 1 }, props.style]}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingVertical: 20 }}>{props.children}</View>
    </ScrollView>
  );
};

export default ScrollViewComponent;
