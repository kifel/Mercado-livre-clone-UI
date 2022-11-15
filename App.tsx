import React from "react";
import { StatusBar } from "react-native";
import { UserProvider } from "./src/context/User";
import { RoutesConfig } from "./src/Routes";

export default function App() {
  return (
    <UserProvider>
      <RoutesConfig />
      <StatusBar backgroundColor="#ffee00" barStyle="dark-content" />
    </UserProvider>
  );
}
