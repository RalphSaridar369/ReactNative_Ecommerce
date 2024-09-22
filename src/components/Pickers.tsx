import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import HeaderText from "./HeaderText";
import { TextInputComponent } from "./TextInput";
import { AntDesign } from "@expo/vector-icons";
import { AppStyles } from "../../AppStyle";
import { MainContext } from "../reducer/MainContext";

const styles2 = StyleSheet.create({
  container: {
    // flex: 1,d
    backgroundColor: "white",
    padding: 0,
    width: "100%",
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: Platform.OS === "ios" ? 0 : 1,
    borderBottomWidth: Platform.OS === "ios" ? 0.5 : 1,
    height: 60,
    justifyContent: "center",
    marginBottom: 40,
    width: Dimensions.get("screen").width * 0.8,
    // paddingVertical: Platform.OS==='ios'? 0 : 20,
    paddingHorizontal: Platform.OS === "ios" ? 10 : 20,
    borderRadius: 5,
  },
  dropdownMultiPicker: {
    backgroundColor: "white",
    marginBottom: 40,
    width: Dimensions.get("screen").width * 0.8,
    // paddingVertical: Platform.OS==='ios'? 0 : 20,
    marginHorizontal: Platform.OS === "ios" ? 10 : 20,
  },
  dropdownMultiPickerButton: {
    borderRadius: 5,
    borderColor: "gray",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: Platform.OS === "ios" ? 0 : 1,
    borderBottomWidth: Platform.OS === "ios" ? 0.5 : 1,
    height: 60,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 10,
    marginTop: Platform.OS === "ios" ? 40 : 0,
    paddingBottom: 5,
  },
  container: {
    width: Dimensions.get("screen").width * 0.8,
    borderRadius: 5,
    borderWidth: Platform.OS === "android" ? 1 : 0,
    borderBottomWidth: Platform.OS === "ios" ? 0.5 : 1,
    // height:60,
    borderColor: "gray",
    marginBottom: 40,
  },
  android: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    borderRadius: 5,
  },
  picker: {
    height: Platform.OS === "ios" ? 40 : 65,
    justifyContent: "center",
  },
});

export const Normal = (props) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={[styles2.dropdown]}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={{ color: currentTheme === "dark" ? "#fff" : "black" }}>
          {props?.value
            ? props?.items?.filter((item) => item.id == props.value)[0]?.name
            : props.label}
        </Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <Modal
          transparent={false}
          animationType="fade"
          visible={open}
          onDismiss={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}
        >
          <View
            style={{
              padding: 20,
              flex: 1,
              backgroundColor:
                currentTheme === "dark" ? AppStyles.dark_color_2.color : "#fff",
            }}
          >
            <View style={styles.headerContainer}>
              <HeaderText style={{ marginVertical: 0, marginTop: 0 }}>
                {props.label}
              </HeaderText>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
            {props.search && (
              <View style={{ marginTop: 20 }}>
                <TextInputComponent
                  value={search}
                  style={{ width: Dimensions.get("screen").width - 40 }}
                  onChangeText={(e) => setSearch(e)}
                  label="Search"
                  right="search"
                />
              </View>
            )}
            <ScrollView style={{ marginTop: 20 }}>
              {props?.items
                .filter((item) =>
                  item["name"].toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      props.setValue(item.id);
                      setOpen(!open);
                    }}
                    style={{ marginVertical: 5, paddingVertical: 10 }}
                  >
                    <Text
                      style={{
                        color:
                          item.id === props.value
                            ? "#FF6863"
                            : currentTheme === "dark"
                            ? "#fff"
                            : "black",
                        fontSize: 16,
                      }}
                    >
                      {item["name"]}
                    </Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
