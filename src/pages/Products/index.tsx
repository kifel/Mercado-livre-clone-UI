import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { Container, Filter, FilterContainer, FilterResults } from "./styles";

// import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <FilterContainer>
          <FilterResults>+2.000 resultados</FilterResults>
          <TouchableOpacity>
            <Filter>
              Filtrar (1) <Icon name="chevron-down" />
            </Filter>
          </TouchableOpacity>
        </FilterContainer>
        <ScrollView>
          <ProductCard
            name={"Tênis Masculino Duramo Sl 2.0 adidas"}
            value={239}
            seller={"Mercado Livre"}
            image="https://http2.mlstatic.com/D_Q_NP_796175-MLB51354864490_082022-P.webp"
          />
          <ProductCard
            name={"Samsung Galaxy M23 5G 128 GB light blue 6 GB RAM"}
            value={1.399}
            seller={"Mercado Livre"}
            image={
              "https://http2.mlstatic.com/D_Q_NP_702941-MLA50969308914_082022-P.webp"
            }
          />
          <ProductCard
            name={"Robô Aspirador Robot W90 Varre Aspira E Passa Pano 30w Wap"}
            value={365}
            seller={"Ismafer Ferramentas"}
            image={
              "https://http2.mlstatic.com/D_Q_NP_915941-MLB52182790243_102022-P.webp"
            }
          />
          <ProductCard
            name={"Monitor gamer LG 24MK430H led 23.8\" preto 100V/240V"}
            value={749}
            seller={"Mercado Livre"}
            image={
              "https://http2.mlstatic.com/D_Q_NP_785144-MLA45256008930_032021-P.webp"
            }
          />
        </ScrollView>
      </Container>
    </>
  );
};

export default Products;
