import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContadorProps {
    estourado: boolean;
  }

export const Container = styled.View`
  background-color: #8bbaca;
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const CancelButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
    margin: 0px 100px 0px 10px;
`;

export const CancelImage = styled.Image`
    width: 30px;
    height: 30px;
`;

export const RascunhoTexto = styled.Text`
    font-size: 24px;
    font-family: 'Bitter_700Bold';
    font-weight: bold;
    color: black;
    align-self: center;
`;

export const PiuInput = styled.TextInput<ContadorProps>`
    width: 100%;
    margin-top: 20px;
    background-color: #B9D6DF;
    height: 200px;
    padding: 10px;
    font-size: 20px;
    font-family: 'Bitter_400Regular';
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    color: ${props => 
      props.estourado ? 'red' : 'black'
    }
`;

export const PiarButton = styled(RectButton)`
    background-color: #4558f4;
    border-radius: 10px;
    width: 80px;
    height: 24.8px;
    align-self: flex-end;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const PiarText = styled.Text`
    color: #6FA5B8;
    font-size: 18px;
    font-family: 'Bitter_700Bold';
    font-weight: bold;
`;

export const PiuChars = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #B9D6DF;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    padding: 0 10px;    
`;

export const ErrorMessage = styled.Text`
    color: red;
    font-size: 18px;
    font-family: 'Bitter_400Regular';
`;

export const Contador = styled.Text<ContadorProps>`
    font-size: 18px;
    font-family: 'Bitter_400Regular';
    color: ${props => 
      props.estourado ? 'red' : 'black'
    }
`;

