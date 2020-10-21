import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    background-color: #8bbaca;
    width: 100%;
`;

export const PseudoContainer = styled(Container)`
    height: 100%;
    background-color: #8bbaca;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const PageHeader = styled.View`
    width: 90%;
    margin-top: 30px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-around;
`;

export const GoBackButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
`;

export const GoBackImage = styled.Image`
    width: 20px;
    height: 20px;
`;

export const LogoutButton = styled(GoBackButton)``;

export const LogoutImage = styled.Image`
    width: 30px;
    height: 30px;
`;

export const UsernameText = styled.Text`
    align-self: center;
    font-size: 20px;
    font-family: 'Bitter_400Regular';
    margin: 0 30%;
`;

export const ProfileInfo = styled.View`
    justify-content: center;
    width: 90%;
`;

export const PhotoAndNumbers = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ProfileImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border-width: 1px; 
    border-color: black;
`;

export const StyledView = styled.View`
    align-items: center;
    justify-content: center;
`;

export const FollowersNumber = styled.Text`
    font-size: 18px;
    font-family: 'Bitter_700Bold';
    font-weight: bold;
`;

export const FollowersText = styled.Text`
    font-size: 16px;
    font-family: 'Bitter_400Regular';
`;

export const NameAndAbout = styled.View`
    align-items: flex-start;
    justify-content: center;
`;

export const NameText = styled.Text`
    font-size: 18px;
    font-family: 'Bitter_400Regular';
    margin-bottom: 5px;
`;

export const AboutText = styled.Text`
    font-size: 16px;
    font-family: 'Bitter_400Regular';
`;

export const FollowButton = styled(RectButton)`
    background-color: #4558f4;
    border-radius: 10px;
    width: 130px;
    height: 40px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const FollowText = styled.Text`
    color: #6FA5B8;
    font-size: 16px;
    font-family: 'Bitter_700Bold';
    font-weight: bold;
`;