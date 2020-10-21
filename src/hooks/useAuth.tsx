import React, { useCallback, useContext, useEffect, createContext, useState } from 'react';

import { AsyncStorage } from 'react-native';

import api from '../services/api';
import * as Yup from 'yup';
import usePius from './usePius';


interface AuthContextData {
    cred: Cred;
    setCred(cred: Cred): void;
    login(cred: Cred): Promise <boolean>;
    token: string;
    setToken(token: string): void;
    usernameError: string; 
    passwordError: string; 
    loginError: string;
}

interface Cred {
    username: string;
    password: string;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    
    const [cred, setCred] = useState<Cred>({} as Cred);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [token, setToken] = useState<string>("");

    const {getUserData} = usePius();

    useEffect(() => {
        async function carregarDadosUsuario() {
            const token = await AsyncStorage.getItem('@Piupiuwer:token');
            const username = await AsyncStorage.getItem('@Piupiuwer:username');

            if (!!token && !!username) {
                setToken(token)
                setCred({...cred, username:username});

                api.defaults.headers.Authorization = `JWT ${token}`;
            }
        }
        carregarDadosUsuario();

    },[]);


    const login = useCallback(async (cred: Cred) => {
        try{ 
            const esquema = Yup.object().shape({
                username: Yup.string().required('Este campo é obrigatório.'),
                password: Yup.string().required('Este campo é obrigatório.')

            });
            await esquema.validate(cred, { abortEarly: false });

            const response = await api.post('/login/', cred);
            getUserData(cred.username);
            const {token} = response.data;
            api.defaults.headers.Authorization = `JWT ${token}`;

            if(!!token){
                setLoginError("");
                setToken(token);
                await AsyncStorage.setItem('@Piupiuwer:token', token);
                await AsyncStorage.setItem('@Piupiuwer:username', cred.username);
            }

        return true;

        } catch(err) {

            setLoginError("Coloque usuário e senha válidos");

            if (err instanceof Yup.ValidationError) {
                console.log(err);
                alert("Por favor, preencha todos os campos");
            }
            else {
                alert("Impossível fazer login com as credenciais fornecidas");
            }
        }
        return false;
        
    },[setUsernameError, setPasswordError, setToken]);


    return (
        <AuthContext.Provider value = {{
            cred, 
            setCred, 
            token,
            setToken,
            login, 
            usernameError, 
            passwordError, 
            loginError
        }} >
            {children}
        </AuthContext.Provider>

    );
}

const useAuth = () => useContext(AuthContext);

export default useAuth;