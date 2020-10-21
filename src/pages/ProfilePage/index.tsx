import React, { useEffect } from 'react';
import { AsyncStorage, View } from 'react-native';
import Profile from '../../components/Profile';
import usePius from '../../hooks/usePius';

const ProfilePage: React.FC = () => {
    const {loggedUserData, getUserData} = usePius();

    useEffect(() => {
        const loadData = async () => {
            const username = await AsyncStorage.getItem('@Piupiuwer:username');
            if(!!username) await getUserData(username);
        }
        loadData();
    }, []);

  return <Profile profileData={loggedUserData} />;
}

export default ProfilePage;