import styled from "styled-components/native";

export const ProductContainer = styled.View`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: row;
  margin-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #c4c4c4;
`;

export const ProductContentContainer = styled.View`
  padding-left: 5px;
  width: 50%;
`;

export const ImageContainer = styled.View`
  width: 50%;
  height: 220px;
  overflow: hidden;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 8px;
`;

export const ProductValueContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
