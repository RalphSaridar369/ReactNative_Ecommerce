import { StyleSheet, Dimensions } from "react-native";

let screenWidth = Dimensions.get("screen").width;
export const styles = StyleSheet.create({
  total: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: screenWidth,
  },
  total_label: {
    color: "white",
    marginTop: 0,
  },
  total_value: {
    marginVertical: 0,
    fontSize: 20,
    // fontFamily:'OpenSans-Bold',
    color: "white",
  },
});
