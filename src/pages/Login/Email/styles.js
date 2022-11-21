import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffff;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ReportContainer = styled.View`
  width: 100%;
  border: 1px solid #c4c4c4;
  padding: 25px;
  margin-top: 40px;
  border-radius: 8px;
`;

export const CopyrightContainer = styled.View`
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #c4c4c4;
`;

export const CopyrightTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CopyrightText = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const ReportTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 25px;
`;

export const ReportDescription = styled.Text`
  font-size: 16px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 40px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #c4c4c4;
  padding: 8px;
  border-radius: 8px;
`;

export const Texto = styled.Text`
  color: #3483fa;
  font-weight: 600;
`;

export const Recover = styled.TouchableOpacity`
  margin-top: 25px;
`;

export const Continue = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background-color: #3483fa;
  justify-content: center;
  align-items: center;
`;

export const ContinueText = styled.Text`
  color: #fff;
`;

export const Placeholder = styled.Text`
  margin-top: 80px;
  font-size: 11px;
  margin-bottom: 5px;
`;
