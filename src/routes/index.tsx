import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import useAuth from '../hooks/useAuth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';


const Index: React.FC = () => {
    const {token} = useAuth();

    return (
        <NavigationContainer>
            {
                 !token ? <AuthStack/> : <AppStack/>
            }
        </NavigationContainer>
    );
}

export default Index;