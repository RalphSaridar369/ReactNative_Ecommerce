import React, { useContext, useState } from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../reducer/MainContext";
import { AppStyles } from "../../AppStyle";

export const TextInputComponent = ({
  left = null,
  right = null,
  ...props
}: any) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        {...props}
        autoComplete="off"
        activeOutlineColor={
          currentTheme === "dark" ? AppStyles.dark_color.color : "#FF6863"
        }
        selectionColor="#FF6863"
        activeUnderlineColor="#FF6863"
        mode={
          props.variant
            ? props.variant
            : Platform.OS == "ios"
            ? "flat"
            : "outlined"
        }
        style={[
          styles.textInput,
          Platform.OS === "ios" && props.style
            ? props.style
            : Platform.OS === "ios"
            ? styles.ios
            : styles.android,
          props.style,
        ]}
        left={
          left ? (
            <TextInput.Icon
              icon={
                left == "search"
                  ? () => (
                      <MaterialIcons name="search" color="black" size={20} />
                    )
                  : left
              }
              style={{ marginTop: 14 }}
            />
          ) : null
        }
        right={
          right ? (
            <TextInput.Icon
              icon={
                right == "search"
                  ? () => (
                      <MaterialIcons name="search" color="black" size={20} />
                    )
                  : right
              }
              style={{ marginTop: 14 }}
            />
          ) : null
        }
      />
    </View>
  );
};

export const PassInputComponent = ({
  left = null,
  right = null,
  ...props
}: any) => {
  const { state } = useContext(MainContext);
  const currentTheme = state.theme;
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        activeOutlineColor={
          currentTheme === "dark" ? AppStyles.dark_color.color : "#FF6863"
        }
        selectionColor="#FF6863"
        activeUnderlineColor="#FF6863"
        secureTextEntry={show}
        mode={
          props.variant
            ? props.variant
            : Platform.OS == "ios"
            ? "flat"
            : "outlined"
        }
        style={[
          styles.textInput,
          Platform.OS === "ios" && props.style
            ? props.style
            : Platform.OS === "ios"
            ? styles.ios
            : styles.android,
        ]}
        left={
          left ? <TextInput.Icon icon={left} style={{ marginTop: 14 }} /> : null
        }
        right={
          <TextInput.Icon
            icon={!show ? "eye-off-outline" : "eye-outline"}
            style={{ marginTop: 14 }}
            onPress={() => setShow(!show)}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("screen").width * 0.8,
    height: 40,
    alignItems: "center",
    marginBottom: Platform.OS == "ios" ? 30 : 40,
  },
  textInput: {
    paddingHorizontal: 10,
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: "#fff",
    borderColor: "lightgray",
  },
  ios: {},
  android: {},
});
