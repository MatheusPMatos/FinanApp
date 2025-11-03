import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  ErrorText,
  Button,
  ButtonText,
  LoginLink,
  LoginLinkText,
} from './styles';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirme sua senha')
    .oneOf([yup.ref('password')], 'As senhas não coincidem'),
});

const SignUp: React.FC = () => {
  const navigation = useNavigation<any>();

  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('SignIn');
      }, 1500);
    } catch (error) {
      setLoading(false);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <Container>

      <Title>Crie sua conta</Title>

      <Form>
        <Label>Nome completo</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite seu nome"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <Label>E-mail</Label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite seu e-mail"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label>Senha</Label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite sua senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Label>Confirmar senha</Label>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirme sua senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}

        <Button disabled={!isValid || loading} onPress={handleSubmit(onSubmit)}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonText>Cadastrar</ButtonText>
          )}
        </Button>

        <LoginLink onPress={() => navigation.navigate('SignIn')}>
          <LoginLinkText>Já tem conta? Entrar</LoginLinkText>
        </LoginLink>
      </Form>
    </Container>
  );
};

export default SignUp;

