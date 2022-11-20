import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffff;
`;

export const FilterContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #c4c4c4;
`;

export const FilterResults = styled.Text`
  color: gray;
  font-size: 16px;
`;

export const Filter = styled.Text`
  color: #3483fa;
  font-size: 16px;
`;
