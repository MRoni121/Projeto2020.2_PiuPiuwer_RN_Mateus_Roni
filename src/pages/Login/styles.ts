import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';



export const Container = styled.View`
    background-color: #8bbaca;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 55px 0 15px 0;
`;

export const LogoName = styled.Text`
    color: black;
    font-size: 50px;
    font-family: 'Bitter_400Regular';
    margin-left: 12px;
    color: #5E60CE;
`;

export const LogoImage = styled.Image`
    width: 80px;
    height: 90.49px;
`;

export const LandingText = styled.View`
align-items: center;
justify-content: center;
width: 65%;
margin-bottom: 30px;
`;

export const SupportText = styled.Text`
  font-size: 21px;
  font-family: 'Bitter_400Regular';
  text-align: left;
`;

export const LoginBox = styled.View`
  height: 55%;
  width: 300px;
  border-radius: 24px;
  padding: 40px;

  justify-content: space-around;
  align-items: center;

  background-color: #B9D6DF;
`;

export const InputCred = styled.TextInput`
  width: 250px;
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 8px;
`;

export const LoginButton = styled(RectButton)`
  background-color: #4558F4;
  border-radius: 24px;
  width: 250px;
  height: 56px;
  border: none;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: #B9D6DF;
  font-size: 21px;
  font-family: 'Bitter_400Regular';
`;

export const StyledView = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPassword = styled.Text`
  color: #4558f4;
  margin: 10px 0;
`;

export const NewAccount = styled(RectButton)`
  border-radius: 24px;
  width: 250px;
  height: 56px;
  border: none;
  background: #08cd95;
  align-items: center;
  justify-content: center;
`;

export const NewAccountText = styled.Text`
  color: #d2e9f0;
  font-size: 19.2px;
  font-family: 'Bitter_400Regular';
`;

export const Hr = styled.View`
  width: 90%;
  height: 1px;
  background-color: #5E60CE;
  margin-bottom: 5px;
`;

export const CredError = styled.Text`
  font-size: 14.5px;
  font-family: 'Bitter_400Regular';
  color: red;
  align-self: center;
  margin-bottom: 5px;
`;
