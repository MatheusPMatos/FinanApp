import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, justifyContent: 'center', padding: 24 },
})`
  background-color: #f0f4ff;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #222;
  margin-bottom: 32px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 12px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
  color: #e63946;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#a0a0a0' : '#0066ff')};
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

export const LoginLink = styled.TouchableOpacity`
  margin-top: 24px;
  align-items: center;
`;

export const LoginLinkText = styled.Text`
  color: #0066ff;
  font-size: 14px;
`;
