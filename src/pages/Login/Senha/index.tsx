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
  Input,
  InputContainer,
  InputContainerButton,
  PasswordText,
  Placeholder,
  Recover,
  ReportContainer,
  ReportDescription,
  ReportTitle,
  Texto,
  Title,
  TitleContainer
} from "./styles";

export const Senha: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [passwordVisibility, setPasswordVisibility] =
    React.useState<Boolean>(true);
  const [color, setColor] = React.useState<String>("#c4c4c4");
  const [iconPassword, setIconPassword] = React.useState<String>("     EXIBIR");
  const { user, LoginPass } = useContext<any>(UserContext);

  const {
    handleSubmit,
    control,
    reset,
    formState,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      senha: "",
    },
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ senha: "" });
    } else {
      borderColor();
    }
  }, [formState, reset]);

  const handleSubmitForm = (data: User) => {
    data.login = user;
    console.log(data);
    screenProducts();
  };

  const screenLogin = () => {
    navigation.navigate("Login");
  };

  const screenProducts = () => {
    navigation.navigate("Products");
  };

  const handlePasswordVisibility = () => {
    if (iconPassword === "     EXIBIR") {
      setIconPassword("OCULTAR");
      setPasswordVisibility(!passwordVisibility);
    } else if (iconPassword === "OCULTAR") {
      setIconPassword("     EXIBIR");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const changeAccount = () => {
    LoginPass("");
    screenLogin();
  };

  const borderColor = () => {
    if (errors?.senha?.message) {
      setColor("red");
    } else {
      setColor("#c4c4c4");
    }
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <TitleContainer>
            <TouchableOpacity onPress={screenLogin}>
              <Icon name="arrow-left" color="black" size={24} />
            </TouchableOpacity>
            <Title>Agora, sua senha do Mercado Livre</Title>
          </TitleContainer>
          <InputContainer>
            <Placeholder>Senha</Placeholder>
            <InputContainerButton
              style={{
                borderWidth: 1,
                borderColor: `${color}`,
              }}
            >
              <Controller
                control={control}
                name="senha"
                rules={{
                  required: "senha não pode ser nula!!",
                }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <Input
                      value={value || ""}
                      onChangeText={onChange}
                      keyboardType="default"
                      autoCapitalize="none"
                      secureTextEntry={passwordVisibility}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility}>
                      <Texto>{iconPassword}</Texto>
                    </TouchableOpacity>
                  </>
                )}
              />
            </InputContainerButton>
            {errors?.senha && (
              <Text style={{ color: "red" }}>{errors.senha.message}</Text>
            )}
          </InputContainer>
          <Continue onPress={handleSubmit(handleSubmitForm)}>
            <ContinueText>Continuar</ContinueText>
          </Continue>
          <Recover>
            <PasswordText>Não sei a minha senha</PasswordText>
          </Recover>
          <Recover onPress={changeAccount}>
            <Texto>Não sou {user}</Texto>
          </Recover>
          <ReportContainer>
            <TouchableOpacity>
              <ReportTitle>Reportar um problema</ReportTitle>
              <ReportDescription>
                <Icon name="smartphone" color="black" size={24} />
                {"  "}Roubo ou perda do Telefone{"   "}
                <Icon name="chevron-right" color="black" size={24} />
              </ReportDescription>
            </TouchableOpacity>
          </ReportContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};
