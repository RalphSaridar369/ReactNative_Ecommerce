import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { HeaderText, Text } from "../../components";
import { AppStyles } from "../../../AppStyle";
import useTheme from "../../helpers/useTheme";

const About = () => {
  const currentTheme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          currentTheme === "dark" ? AppStyles.dark_color.color : "#fff",
      }}
    >
      <ScrollView>
        <View style={styles.header_text_container}>
          <HeaderText style={styles.header_text}>About</HeaderText>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text}>
            This app was written in react native.{"\n"}tested and built on both
            ios and android.{"\n"}
            {"\n"}I used a skeleton template I have written myself, contains
            some reusable components such as:{"\n"}TextInput, DocumentPicker,
            ImagePicker, FormValidators and much more...{"\n"}
            {"\n"}For form validations I have used a package called yup and for
            global state management I used useReducer + useContext.{"\n"}
            {"\n"}All the data that is shown in the app is static data (mock
            data).{"\n"}
            {"\n"}There are two types of users: Buyer and Seller. the only
            difference between these two is that the buyer can add to cart and
            remove from it while the seller has his dashboard page.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header_text_container: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  header_text: {},
  text_container: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
});

export default About;
