import React from "react";
import { StatusBar } from "react-native";
import { RoutesConfig } from "./src/Routes";

export default function App() {
  return (
    <>
      <RoutesConfig />
      <StatusBar backgroundColor="#ffee00" barStyle="dark-content" />
    </>
  );
}
