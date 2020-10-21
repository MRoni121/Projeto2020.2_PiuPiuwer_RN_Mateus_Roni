import React from 'react';
import Profile from '../../components/Profile';
import usePius from '../../hooks/usePius';

const OtherProfilePage: React.FC = () => {

    const {otherUserData} = usePius();
    return <Profile profileData={otherUserData} />;
}

export default OtherProfilePage;