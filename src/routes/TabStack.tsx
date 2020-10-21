import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../pages/Feed';
import NovoPiu from '../pages/NovoPiu';
import { Image } from 'react-native';

import HomeIcon from '../assets/images/homepage.png';
import AddIcon from '../assets/images/plus-sign.png';
import ProfilePage from '../pages/ProfilePage';
import usePius from '../hooks/usePius';

const { Navigator, Screen } = createBottomTabNavigator();

const TabStack: React.FC = () => {

    const {loggedUserData} = usePius();

    return (
        <Navigator 
            tabBarOptions={{
                showLabel: false,
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                },

                iconStyle: {
                    flex: 0,
                    width: '100%',
                    height: '100%',
                    
                },

                activeBackgroundColor: '#a1d2e0',
                inactiveBackgroundColor: '#8BBACA'

            }}
        > 
            <Screen 
                name='Feed' 
                component={Feed}
                options={{
                    tabBarIcon: () => <Image source={HomeIcon} style={{width: 30, height: 30}}/>
                }}
            />
            <Screen 
                name='Piar' 
                component={NovoPiu} 
                options={{
                    tabBarIcon: () => <Image source={AddIcon} style={{width: 30, height: 30}} />
                }}
            />

            <Screen 
                name='Profile' 
                component={ProfilePage}
                options={{
                    tabBarIcon: () => <Image source={{uri: loggedUserData.foto}} style={{width: 30, height: 30, borderRadius: 15}}/>
                }}
            />
        </Navigator>
    );
}

export default TabStack;

