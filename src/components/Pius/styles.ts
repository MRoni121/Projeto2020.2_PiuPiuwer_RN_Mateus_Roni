import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
`;

export const UserInfo = styled(RectButton)`
    flex-direction: row;
    align-items: center;
`;

export const StyledView = styled.View`
    flex-direction: row;
`;

export const Foto = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-width: 1px; 
    border-color: black;
`;

export const UsernameInfo = styled.View `
    align-items: flex-start;
    padding: 10px;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-family: 'Bitter_400Regular';
`;

export const Username = styled.Text`
    font-size: 15px;
    font-family: 'Bitter_400Regular';
`;

export const PiuTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
`;

export const Logo = styled.Image`
    margin-right: 20px;
    width: 25px;
    height: 28.28px;
`;

export const Piu1 = styled.View`
    background: rgba(255, 255, 255, 0.2);
    border-top-right-radius: 44px;
    border-top-left-radius: 44px;
    width: 100%;
    padding: 5px 10px;
    margin: 20px 0px 0px 0px;
    border: none;
    border-bottom-width: 1px;
    border-bottom-color: black;
`;

export const PiuText = styled.Text`
    margin: 10px 0px;
    padding: 10px 40px;
    font-size: 16px;
    font-family: 'Bitter_400Regular';
`;

export const Piu2 = styled.View`
    justify-content: space-between;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-bottom-right-radius: 44px;
    border-bottom-left-radius: 44px;
    padding: 5px 20px;
    border: none;
`;

export const PiuBottom = styled.View`
    flex-direction: row;
    padding: 5px 10px 5px 30px;
    justify-content: space-between;
`;

export const InteractButton = styled(RectButton)`
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const InteractionImage = styled.Image`
    width: 25px;
    height: 25px;
`;

export const LikeAmount = styled.Text`
    margin: 0 0 0 2px;
`;

export const Likers = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
max-width: 60px;
overflow: hidden;
margin-right: 10px;
`;

export const LikerContainer = styled.View`
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 10px;
    margin: 0;
`;

export const LikerImg = styled.Image`
    width: 20px;
    height: 20px;
    align-self: center;
    border-radius: 10px;
`;
