import React, { useContext } from "react";
import { styles } from "../../AppStyle";
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
      inactiveTintColor="black"
    />
  );
};

export const CustomDrawer = (props) => {
  const { state, dispatch } = useContext(MainContext);
  const clickLogout = () => {
    dispatch({ type: "SIGN_OUT" });
  };
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View style={styles.logo_img_container}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo_img}
          resizeMode="cover"
        />
      </View>
      {state.LoggedIn && (
        <View style={styles.loggedin_container}>
          <Text style={styles.usertype}>
            {state?.UserData?.usertype == 1 ? "Buyer" : "Seller"}
          </Text>
          <Text style={styles.loggedin_text}>
            <Text style={styles.logged_inner_text}>Logged in as</Text>{" "}
            {state?.UserData?.email}
          </Text>
        </View>
      )}
      {/* <DrawerItemList {...props}/> */}
      <CustomItem
        label="Home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={28}
            color={focused ? "#FF6863" : "black"}
          />
        )}
      />
      {props.LoggedIn &&
        (props.UserData.usertype == 1 ? (
          <CustomItem
            label="Cart"
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
            icon={({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                size={28}
                color="black"
              />
            )}
          />
        ) : (
          <CustomItem
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate("Dashboard");
            }}
            icon={({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={28}
                color="black"
              />
            )}
          />
        ))}
      {props.LoggedIn && (
        <CustomItem
          label="Products"
          onPress={() => {
            props.navigation.navigate("Products", { screen: "products" });
          }}
          icon={({ focused, color, size }) => (
            <Feather name="box" size={28} color="black" />
          )}
        />
      )}
      <CustomItem
        label="About"
        onPress={() => {
          props.navigation.navigate("About");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name="head-question-outline"
            size={28}
            color="black"
          />
        )}
      />
      <CustomItem
        label={props.LoggedIn ? "Logout" : "Login"}
        onPress={() =>
          props.LoggedIn ? clickLogout() : props.navigation.navigate("Auth")
        }
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={props.LoggedIn ? "logout" : "login"}
            size={28}
            color="black"
          />
        )}
      />
    </DrawerContentScrollView>
  );
};
