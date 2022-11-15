import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { UserContext } from "../../../context/User";
import { StackParams, User } from "../../../types/GlobalTypes";
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
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { LoginPass } = useContext<any>(UserContext);

  const {
    handleSubmit,
    control,
    reset,
    formState,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      login: "",
    },
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ login: "" });
    }
  }, [formState, reset]);

  const handleSubmitForm = (data: User) => {
    LoginPass(data.login);
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
              <Icon name="arrow-left" color="black" size={24} />
            </TouchableOpacity>
            <Title>Insira seu telefone, e-mail ou usuário</Title>
          </TitleContainer>
          <InputContainer>
            <Placeholder>Telefone, e-mail ou usuário</Placeholder>
            <Controller
              control={control}
              name="login"
              rules={{
                required: "login não pode ser nulo!!",
              }}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value || ""}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={{
                    border: `1px solid ${
                      errors?.login?.message ? "red" : " #c4c4c4"
                    }`,
                  }}
                />
              )}
            />
            {errors?.login && (
              <Text style={{ color: "red" }}>{errors.login.message}</Text>
            )}
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
                <Icon name="smartphone" color="black" size={24} />
                {"  "}Roubo ou perda do Telefone{"    "}
                <Icon name="chevron-right" color="black" size={24} />
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
