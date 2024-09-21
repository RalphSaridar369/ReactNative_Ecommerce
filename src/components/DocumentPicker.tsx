import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { AntDesign } from "@expo/vector-icons";

const DocumentPickerComponent = (props) => {
  const validateType = (value) => {
    let document = value.split(".");
    let extension = document[document.length - 1];
    if (
      props.types.includes(extension.toUpperCase()) ||
      props.types.includes(extension.toLowerCase())
    )
      return true;
    return false;
  };

  const pickDocument = async () => {
    let result: any = await DocumentPicker.getDocumentAsync({});
    if (result.uri && validateType(result.name)) {
      let splitArray = await result.name.split(".");
      let extension = await splitArray[splitArray.length - 1];
      await props.setDocument({
        file: result.uri,
        extension: extension,
        name: result.name,
      });
    } else {
      props.setError();
      Alert.alert("Error", "This extension is not an option");
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.documentContainer,
        Platform.OS === "ios" ? styles.ios : styles.android,
      ]}
      onPress={() => pickDocument()}
    >
      {props.leftIcon && <View>{props.leftIcon.icon}</View>}
      <Text>{props.text}</Text>
      <View>
        {props.rightIcon ? (
          props.rightIcon.icon
        ) : !props?.value?.doc_title ? (
          <AntDesign name="closecircleo" size={24} color="red" />
        ) : (
          <AntDesign name="checkcircleo" size={24} color="green" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  documentContainer: {
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.8,
  },
  ios: {
    borderBottomWidth: 1,
    borderColor: "#31C2AA",
    height: 50,
  },
  android: {
    borderWidth: 1,
    borderColor: "#31C2AA",
    height: 65,
  },
});

export default DocumentPickerComponent;
