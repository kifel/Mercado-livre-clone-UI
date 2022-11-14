import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./stack";

// import { Container } from './styles';

// [x]Rotas configuradas
export const RoutesConfig: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
