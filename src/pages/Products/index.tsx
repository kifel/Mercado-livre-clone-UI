import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Header } from "../../components";

// import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <View>
        <View>
          <Text>+2.000 resultados</Text>
          <Text>Filtrar (1)</Text>
        </View>
        <View>
          <View>
            <Image />
          </View>
          <View>
            <Text>Whisky Read Label 1 litro Johnnie Walker</Text>
            <Text>
              R$ 73<Text>99</Text>
            </Text>
            <Text>39% OFF</Text>
            <Text>
              12x R$7<Text>99</Text>
            </Text>
            <Text>
              <Icon name="zap" /> FULL
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Products;
