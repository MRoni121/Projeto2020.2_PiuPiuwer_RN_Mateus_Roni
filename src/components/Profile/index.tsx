import React, { useCallback, useEffect, useState } from 'react';

import { AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Piu from '../../components/Pius';
import CompleteUser from '../../interfaces/CompleteUser';

import usePius from '../../hooks/usePius';
import useAuth from '../../hooks/useAuth';

import GoBack from '../../assets/images/left-arrow.png';
import Logout from '../../assets/images/exit.png';
import { 
    GoBackButton, 
    GoBackImage, 
    UsernameText, 
    ProfileInfo, 
    PhotoAndNumbers, 
    ProfileImage, 
    FollowersText, 
    NameAndAbout, 
    NameText, 
    AboutText, 
    Container,
    PageHeader,
    StyledView,
    FollowersNumber,
    PseudoContainer,
    FollowButton,
    FollowText,
    LogoutButton,
    LogoutImage
} from './styles';

interface ProfilePageData{
    profileData: CompleteUser;
}

const Profile: React.FC<ProfilePageData> = ({profileData}) => {
    const {goBack} = useNavigation();
    const [followed, setFollowed] = useState(false);
    const [followersAmount, setFollowersAmount] = useState(0);
    const [followText, setFollowText] = useState("");
    const {loggedUserData, followUser} = usePius();
    const {setToken} = useAuth();

    const handleFollow = useCallback( async () => {
        if (followed) {
            setFollowersAmount(followersAmount - 1);
            setFollowText("Seguir");        
        }
        else {
            setFollowersAmount(followersAmount + 1);
            setFollowText("Deixar de seguir");
        }

        setFollowed(!followed);

        await followUser(profileData.id);
    }, [followed, setFollowed, followersAmount, profileData, followUser, setFollowText]);

    const logout = useCallback( async () => {
        await AsyncStorage.clear();
        setToken('');
    }, [setToken, AsyncStorage])

    useEffect(() => {
        setFollowed(false);
        setFollowText("Seguir")
        setFollowersAmount(profileData.seguidores.length);
        profileData.seguidores.map((pessoa) => {
            if(loggedUserData.id === pessoa.id){
                setFollowed(true);
                setFollowText("Deixar de seguir")
            }
        });
    }, []);

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PseudoContainer>

                    <PageHeader>
                        <GoBackButton onPress={() => goBack()}>
                            <GoBackImage source={GoBack}/>
                        </GoBackButton>

                        <UsernameText>{profileData.username}</UsernameText>
                        {profileData.id === loggedUserData.id
                        ?
                            <LogoutButton onPress={() => logout()}>
                                <LogoutImage source={Logout}/>
                            </LogoutButton>
                        :
                            <></>
                        }
                        
                    </PageHeader>

                    <ProfileInfo>

                        <PhotoAndNumbers>

                            <ProfileImage source={{ uri: profileData.foto }} />

                            <StyledView>
                                <FollowersNumber> {profileData.pius.length} </FollowersNumber>
                                <FollowersText>Pius</FollowersText>
                            </StyledView>

                            <StyledView>
                                <FollowersNumber> {followersAmount} </FollowersNumber>
                                <FollowersText>Seguidores</FollowersText>
                            </StyledView>

                            <StyledView>
                                <FollowersNumber> {profileData.seguindo.length} </FollowersNumber>
                                <FollowersText>Seguindo</FollowersText>
                            </StyledView>

                        </PhotoAndNumbers>

                        <NameAndAbout>
                            <NameText> {profileData.first_name} {profileData.last_name} </NameText>
                            <AboutText> {profileData.sobre} </AboutText>
                        </NameAndAbout>

                        {profileData.id !== loggedUserData.id 
                        ?
                            <FollowButton onPress={handleFollow}>
                                <FollowText>
                                    {followText}
                                </FollowText>
                            </FollowButton>
                        :
                            <></>
                        }

                    </ProfileInfo>

                    {profileData.pius.map(piu => <Piu key={piu.id} piuData={piu} />)}
                    {profileData.favoritos.map(piu => <Piu key={piu.id} piuData={piu} />)}
                    
                    {/* ideia "melhor" para carregar os pius dessa página, mas deu errada */}
                    {/* {pius.map((piu) => {piu.usuario.id === profileData.id
                        ? <Piu key={piu.id} piuData={piu}/>
                        : <></>
                        }
                    )} */}

                </PseudoContainer>
            </ScrollView>
        </Container>
    );
}

export default Profile;