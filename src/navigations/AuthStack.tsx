import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";

const AStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AStack.Navigator>
      <AStack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AStack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AStack.Navigator>
  );
};

export default AuthStack;
