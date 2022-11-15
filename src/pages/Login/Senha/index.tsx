import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { StackParams } from "../../../Routes/stack";

// import { Container } from './styles';

export const Senha: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const screenLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <TouchableOpacity onPress={screenLogin}>
        <Icon name="arrow-left" color="black" size={24} />
      </TouchableOpacity>
      <Text>Pagina de Senha</Text>
    </View>
  );
};
