import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Continue,
  ContinueText,
  CopyrightContainer,
  CopyrightText,
  CopyrightTitle,
  Input,
  InputContainer,
  Placeholder,
  Recover,
  ReportContainer,
  ReportDescription,
  ReportTitle,
  Texto,
  Title,
  TitleContainer
} from "./styles";

export const Login: React.FC = () => {
  const { handleSubmit, setValue } = useForm();
  const navigation = useNavigation<any>();

  const handleSubmitForm = (data:any) => {
    console.log(data);
    screenSenha();
  };

  const screenSenha = () => {
    navigation.navigate("Senha");
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <TitleContainer>
            <TouchableOpacity>
              <Text>Ícone de voltar</Text>
            </TouchableOpacity>
            <Title>Insira seu telefone, e-mail ou usuário</Title>
          </TitleContainer>
          <InputContainer>
            <Placeholder>Telefone, e-mail ou usuário</Placeholder>
            <Input
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text: String) => setValue("login", text)}
            />
          </InputContainer>
          <Continue onPress={handleSubmit(handleSubmitForm)}>
            <ContinueText>Continuar</ContinueText>
          </Continue>
          <Recover>
            <Texto>Criar Conta</Texto>
          </Recover>
          <Recover>
            <Texto>Preciso de ajuda para entrar</Texto>
          </Recover>
          <ReportContainer>
            <TouchableOpacity>
              <ReportTitle>Reportar um problema</ReportTitle>
              <ReportDescription>
                I Roubo ou perda do Telefone {"              >"}
              </ReportDescription>
            </TouchableOpacity>
          </ReportContainer>
        </Content>
      </ScrollView>
      <CopyrightContainer>
        <CopyrightTitle>Como cuidamos da sua privacidade</CopyrightTitle>
        <CopyrightText> Copyright @1999-2022 Ebazar.com.br LTDA </CopyrightText>
      </CopyrightContainer>
    </Container>
  );
};
