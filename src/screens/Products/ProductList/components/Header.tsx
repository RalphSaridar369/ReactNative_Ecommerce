import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { MainContext } from "../../../../reducer/MainContext";
import { AppStyles } from "../../../../../AppStyle";

const screenWidth = Dimensions.get("screen").width;
const Header = (props) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;
  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor:
            currentTheme === "dark" ? AppStyles.dark_color_2.color : "#ECECEC",
        },
      ]}
    >
      <View
        style={[
          styles.search_bar,
          { borderColor: currentTheme === "dark" ? "#fff" : "black" },
        ]}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor={currentTheme === "dark" ? "#fff" : "black"}
          style={styles.search_bar_input}
          value={props.search}
          onChangeText={(e) => props.onChangeText(e)}
        />
        <AntDesign
          name="search1"
          size={24}
          color={currentTheme === "dark" ? "#fff" : "black"}
          style={styles.search_icon}
        />
      </View>
      <View style={styles.icons_container}>
        <TouchableOpacity onPress={() => props.show("filter")}>
          <AntDesign
            name="filter"
            size={34}
            color={
              currentTheme === "dark" ? "#fff" : AppStyles.light_color.color
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.show("sort")}>
          <FontAwesome
            name="sort"
            size={34}
            color={
              currentTheme === "dark" ? "#fff" : AppStyles.light_color.color
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: screenWidth,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ECECEC",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search_bar: {
    flex: 3,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search_bar_input: {},
  search_icon: {
    paddingLeft: 10,
  },
  icons_container: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
