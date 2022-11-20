import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Product } from "../../types/GlobalTypes";
import {
  ImageContainer,
  ProductContainer,
  ProductContentContainer,
  ProductImage,
  ProductValueContainer
} from "./styles";

export const ProductCard: React.FC<Product> = ({
  name,
  value,
  seller,
  image,
}) => {
  return (
    <TouchableOpacity>
      <ProductContainer>
        <ImageContainer>
          <ProductImage
            source={{ uri: `${image}` }} style={{resizeMode: "contain"}}
          />
        </ImageContainer>
        <ProductContentContainer>
          <Text>{name}</Text>
          <ProductValueContainer>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              R$ {value}
              <Text style={{ fontSize: 10, fontWeight: "600" }}> 99</Text>
            </Text>
            <Text style={{ color: "green", marginLeft: 20 }}>39% OFF</Text>
          </ProductValueContainer>
          <Text>
            em 12x R$7
            <Text style={{ fontSize: 10, fontWeight: "600" }}> 99</Text>
          </Text>
          <Text
            style={{
              color: "green",
              marginTop: 45,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Icon
              style={{ color: "green", fontWeight: "bold" }}
              name="zap"
              size={16}
            />{" "}
            FULL
          </Text>
          <Text style={{ color: "grey", marginTop: 30 }}>
            Vendido por {seller}
          </Text>
        </ProductContentContainer>
      </ProductContainer>
    </TouchableOpacity>
  );
};
