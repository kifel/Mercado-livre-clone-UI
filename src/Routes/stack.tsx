import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../pages/Login/Email";
import { Senha } from "../pages/Login/Senha";
import Products from "../pages/Products";
import { StackParams } from "../types/GlobalTypes";

const { Screen, Navigator } = createNativeStackNavigator<StackParams>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Senha" component={Senha} />
      <Screen name="Products" component={Products} />
    </Navigator>
  );
};
