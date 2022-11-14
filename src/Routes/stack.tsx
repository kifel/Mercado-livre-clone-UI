import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../pages/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
