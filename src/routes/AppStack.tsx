import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OtherProfilePage from '../pages/OtherProfilePage';
import TabStack from './TabStack';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {

    return (
        <Navigator screenOptions={{headerShown: false}}> 
            <Screen 
                name='TabStack' 
                component={TabStack}
            />

            <Screen 
                name='OtherProfile' 
                component={OtherProfilePage}
            />
        </Navigator>
    );
}

export default AppStack;

