import React, { useCallback } from 'react';

import { Container, 
    CredError, 
        ForgotPassword, 
        Hr, 
        InputCred, 
        LandingText, 
        LoginBox, 
        LoginButton, 
        LoginButtonText, 
        LogoContainer, 
        LogoImage, 
        LogoName, 
        NewAccount, 
        NewAccountText, 
        StyledView, 
        SupportText } from './styles';

import LogoImg from '../../assets/images/logo.png';
import useAuth from '../../hooks/useAuth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Login: React.FC = () => {

    const { cred, setCred, login, loginError } = useAuth();

    const handleClick = useCallback(async () => {
        await login(cred);

    }, [cred, login]);

    return (
        <KeyboardAwareScrollView 
            style={{ backgroundColor: '#8bbaca' }} 
            resetScrollToCoords={{ x: 0, y: 0 }}    
        >
            <Container >
                <LandingText>
                    <LogoContainer>
                        <LogoImage source={LogoImg}/>
                        <LogoName>PiuPiuwer</LogoName>
                    </LogoContainer>
                    <SupportText>Conecte-se e compartilhe com as pessoas que fazem parte de sua vida com a ajuda do PiuPiuwer</SupportText>
                </LandingText>

                <LoginBox>
                    <StyledView>
                        <InputCred 
                            textContentType="nickname" 
                            placeholder = "Digite o nome de usuário: "
                            onChangeText = {text => setCred({...cred, username: text})}  
                        />
                    </StyledView>

                    <StyledView>
                        <InputCred 
                            textContentType = "password" 
                            placeholder = "Digite sua senha: "
                            secureTextEntry={true}
                            onChangeText = {password => setCred({...cred, password: password}) }
                        />
                    </StyledView>

                    <StyledView>
                        <LoginButton onPress={handleClick}>
                            <LoginButtonText>Entrar</LoginButtonText>
                        </LoginButton>
                        <CredError>{loginError}</CredError>
                    </StyledView>

                    <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
                    <Hr></Hr>

                    <NewAccount>
                        <NewAccountText>Criar nova conta</NewAccountText>
                    </NewAccount>
                    
                </LoginBox>
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;
