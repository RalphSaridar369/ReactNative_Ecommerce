import React, { useContext } from "react";
import { AppStyles } from "../../AppStyle";
import { View, Image } from "react-native";
import { Text } from "../components";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { MainContext } from "../reducer/MainContext";

const CustomItem = (props) => {
  return (
    <DrawerItem
      label={props.label}
      // labelStyle={{ fontFamily: "OpenSans-Medium" }}
      onPress={props.onPress}
      icon={props.icon}
      activeBackgroundColor="transparent"
      activeTintColor="#FF6863"
      inactiveTintColor={props.theme === "dark" ? "white" : "black"}
    />
  );
};

export const CustomDrawer = (props) => {
  const { state, dispatch } = useContext(MainContext);

  const clickLogout = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor:
          state.theme === "dark" ? AppStyles.dark_color.color : "white",
      }}
    >
      <View style={AppStyles.logo_img_container}>
        <Image
          source={require("../../assets/logo.png")}
          style={AppStyles.logo_img}
          resizeMode="cover"
        />
      </View>
      {state.LoggedIn && (
        <View style={AppStyles.loggedin_container}>
          <Text style={AppStyles.usertype}>
            {state?.UserData?.usertype == 1 ? "Buyer" : "Seller"}
          </Text>
          <Text style={AppStyles.loggedin_text}>
            <Text style={AppStyles.logged_inner_text}>Logged in as</Text>{" "}
            {state?.UserData?.email}
          </Text>
        </View>
      )}
      <CustomItem
        theme={state.theme}
        label="Home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={28}
            color={state.theme === "dark" ? "white" : "black"}
          />
        )}
      />
      <CustomItem
        theme={state.theme}
        label={
          state.theme === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"
        }
        onPress={() => {
          toggleTheme();
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={state.theme === "dark" ? "lightbulb" : "lightbulb-outline"}
            size={28}
            color={state.theme === "dark" ? "white" : "black"}
          />
        )}
      />
      {props.LoggedIn &&
        (props.UserData.usertype == 1 ? (
          <CustomItem
            theme={state.theme}
            label="Cart"
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
            icon={({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                size={28}
                color={state.theme === "dark" ? "white" : "black"}
              />
            )}
          />
        ) : (
          <CustomItem
            theme={state.theme}
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate("Dashboard");
            }}
            icon={({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={28}
                color={state.theme === "dark" ? "white" : "black"}
              />
            )}
          />
        ))}
      {props.LoggedIn && (
        <CustomItem
          theme={state.theme}
          label="Products"
          onPress={() => {
            props.navigation.navigate("Products", { screen: "products" });
          }}
          icon={({ focused, color, size }) => (
            <Feather
              name="box"
              size={28}
              color={state.theme === "dark" ? "white" : "black"}
            />
          )}
        />
      )}
      <CustomItem
        theme={state.theme}
        label="About"
        onPress={() => {
          props.navigation.navigate("About");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name="head-question-outline"
            size={28}
            color={state.theme === "dark" ? "white" : "black"}
          />
        )}
      />
      <CustomItem
        theme={state.theme}
        label={props.LoggedIn ? "Logout" : "Login"}
        onPress={() =>
          props.LoggedIn ? clickLogout() : props.navigation.navigate("Auth")
        }
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={props.LoggedIn ? "logout" : "login"}
            size={28}
            color={state.theme === "dark" ? "white" : "black"}
          />
        )}
      />
    </DrawerContentScrollView>
  );
};
