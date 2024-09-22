import { useEffect, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDrawer } from "./src/navigations/CustomDrawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

import { getData } from "./src/helpers/asyncStorage";

//importing stacks
import AuthStack from "./src/navigations/AuthStack";
import ProductStack from "./src/navigations/ProductStack";

import Home from "./src/screens/Home/Home";
import About from "./src/screens/about/About";

import { MainContext, initialState } from "./src/reducer/MainContext";
import mainReducer from "./src/reducer/MainReducer";
import Cart from "./src/screens/Cart/Cart";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import { AppStyles } from "./AppStyle";
const DrawerStack = createDrawerNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [loaded, error] = useFonts({
    "OpenSans-Bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("./assets/Fonts/OpenSans-Italic.ttf"),
    "OpenSans-Medium": require("./assets/Fonts/OpenSans-Medium.ttf"),
    "OpenSans-Regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "ProximaNova-Light": require("./assets/Fonts/ProximaNova-Light.ttf"),
  });

  useEffect(() => {
    let runEffect = async () => {
      let user = await getData("user");
      if (user) {
        dispatch({
          type: "SIGN_IN",
          payload: {
            ...state,
            UserData: {
              email: "user1@yopmail.com",
            },
          },
        });
      }
    };
    runEffect();

    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // <------ LOADING FONTS ------>
  const Header = (props) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{props.title}</Text>
        {state?.LoggedIn && props?.icons != undefined && (
          <View style={styles.iconContainer}>
            {props.icons.map((item, index) => (
              <View key={index}>{item.icon}</View>
            ))}
          </View>
        )}
      </View>
    );
  };

  // <------ LOADING FONTS ------>

  if (!loaded && !error) {
    return <View></View>;
  }

  // <------ RETURNING SCREENS ------>
  else
    return (
      <>
        <MainContext.Provider value={{ state, dispatch }}>
          <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor={
                state.theme === "dark"
                  ? AppStyles.dark_color.color
                  : AppStyles.light_color.color
              }
            />
            <DrawerStack.Navigator
              drawerContent={(props) => (
                <CustomDrawer
                  {...props}
                  LoggedIn={state?.LoggedIn}
                  UserData={state?.UserData}
                />
              )}
              screenOptions={({ navigation }) => ({
                swipeEnabled: Platform.OS != "ios" ? true : false,
                headerStyle: {
                  backgroundColor:
                    state.theme === "dark"
                      ? AppStyles.dark_color.color
                      : AppStyles.light_color.color,
                },
                headerLeft: (props) => (
                  <TouchableOpacity
                    style={{ marginHorizontal: 20 }}
                    onPress={() => navigation.toggleDrawer()}
                  >
                    <MaterialCommunityIcons
                      name="menu"
                      size={28}
                      color="white"
                    />
                  </TouchableOpacity>
                ),
                headerRight: (props) =>
                  state?.LoggedIn ? (
                    <TouchableOpacity
                      style={{ paddingRight: 20 }}
                      onPress={() =>
                        navigation.navigate(
                          state?.UserData?.usertype == 1 ? "Cart" : "Dashboard"
                        )
                      }
                    >
                      <MaterialCommunityIcons
                        name={
                          state?.UserData?.usertype == 1
                            ? "cart-outline"
                            : "view-dashboard-outline"
                        }
                        size={28}
                        color="white"
                      />
                    </TouchableOpacity>
                  ) : null,
              })}
            >
              <DrawerStack.Screen
                name="Home"
                component={Home}
                options={{
                  drawerIcon: (config) => (
                    <MaterialCommunityIcons
                      name="home"
                      size={28}
                      color={config.focused ? "white" : "black"}
                    />
                  ),
                  headerTitle: () => (
                    <Header title="Home" LoggedIn={state?.LoggedIn} />
                  ),
                }}
              />
              <DrawerStack.Screen
                name="About"
                component={About}
                options={{
                  headerTitle: () => (
                    <Header title="About" LoggedIn={state?.LoggedIn} />
                  ),
                }}
              />
              <DrawerStack.Screen
                name="Auth"
                component={AuthStack}
                options={{ headerShown: false }}
              />
              <DrawerStack.Screen
                name="Cart"
                component={Cart}
                options={{
                  headerTitle: () => (
                    <Header title="Cart" LoggedIn={state?.LoggedIn} />
                  ),
                }}
              />
              <DrawerStack.Screen
                name="Products"
                component={ProductStack}
                options={{
                  headerTitle: () => (
                    <Header title="Products" LoggedIn={state?.LoggedIn} />
                  ),
                }}
              />
              <DrawerStack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  headerTitle: () => (
                    <Header title="Dashboard" LoggedIn={state?.LoggedIn} />
                  ),
                }}
              />
            </DrawerStack.Navigator>
          </NavigationContainer>
        </MainContext.Provider>
      </>
    );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    width: Dimensions.get("window").width * 0.8,
  },
  title: {
    fontSize: 18,
    flex: 3,
    color: "#fff",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginRight: 20,
  },
});
