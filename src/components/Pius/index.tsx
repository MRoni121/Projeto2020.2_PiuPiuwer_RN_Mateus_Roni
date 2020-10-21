import React, { useCallback, useEffect, useState } from 'react';

import LogoImg from '../../assets/images/logo.png';
import CloseButton from '../../assets/images/close.png';
import LikeButton from '../../assets/images/like.png';
import LikedButton from '../../assets/images/liked.png';
import FavoriteButton from '../../assets/images/favorite.png';
import FavoritedButton from '../../assets/images/favorited.png';

import {
    Container,
    Foto,
    InteractButton,
    InteractionImage,
    LikeAmount,
    LikerContainer,
    LikerImg,
    Likers,
    Logo,
    Name,
    Piu1,
    Piu2,
    PiuBottom,
    PiuText,
    PiuTop,
    StyledView,
    UserInfo,
    Username,
    UsernameInfo
 } from './styles';

import usePius from '../../hooks/usePius';
import PiuData from '../../interfaces/PiuData';
import { useNavigation } from '@react-navigation/native';
import User from '../../interfaces/User';

interface PiupiuData {
    piuData: PiuData;
}

const Piu: React.FC<PiupiuData> = ({ piuData }) => {
    
    const {loggedUserData, likePiu, favoritePiu, deletePiu, getOtherUserData} = usePius();

    const {navigate} = useNavigation();

    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [favoritesAmount, setFavoritesAmount] = useState(0);
    const [likersAmount, setLikersAmount] = useState(0);
    const [likers, setLikers] = useState<User[]>([]);

    const navigateToProfile = useCallback( async (username: string) => {
        await getOtherUserData(username);
        navigate('OtherProfile');

    }, [getOtherUserData, navigate]);

    const handleLike = useCallback( async () => {

        if(liked) {
            setLikersAmount(likersAmount - 1);
            const likersCopy = likers.filter(pessoa => pessoa.id !== loggedUserData.id);
            setLikers(likersCopy);
        }
        else{
            setLikersAmount(likersAmount + 1);
            setLikers([loggedUserData, ...likers]);

        }
        setLiked(!liked);
        await likePiu(piuData.id);
    }, [liked, setLiked, likePiu, likersAmount, piuData]);

    const handleFavorite = useCallback( async () => {
        favorited ? setFavoritesAmount(favoritesAmount - 1) : setFavoritesAmount(favoritesAmount + 1);
        
        setFavorited(!favorited);
        await favoritePiu(piuData.id);
    }, [favorited, setFavorited, favoritePiu, favoritesAmount, piuData]);


    useEffect(() => {
        setLiked(false);
        setFavorited(false);
        setFavoritesAmount(piuData.favoritado_por.length);
        setLikersAmount(piuData.likers.length);
        setLikers(piuData.likers);
        piuData.likers.map((pessoa) => {
            if(loggedUserData.id === pessoa.id){
                setLiked(true);
            }
        });

        piuData.favoritado_por.map((pessoa) => {
            if(loggedUserData.id === pessoa.id){
                setFavorited(true);
            }
        });
    }, [piuData.favoritado_por]);

    return(
        <Container>
            <Piu1>
                <PiuTop>
                    <UserInfo onPress={() => navigateToProfile(piuData.usuario.username)}>
                        <Foto source ={{uri: piuData.usuario.foto}}></Foto>
                        <UsernameInfo>
                            <Name>{piuData.usuario.first_name} {piuData.usuario.last_name}</Name>
                            <Username>@{piuData.usuario.username}</Username>
                        </UsernameInfo>
                    </UserInfo>
                    <Logo source={LogoImg}/>
                </PiuTop>

                <PiuText>{piuData.texto}</PiuText>
            </Piu1>

            <Piu2>
                <PiuBottom>
                    <StyledView>

                    <InteractButton onPress={handleFavorite}>
                            <InteractionImage source={favorited? FavoritedButton : FavoriteButton}/>
                            <LikeAmount>{favoritesAmount}</LikeAmount>
                        </InteractButton>

                        <InteractButton onPress={handleLike}>
                            <InteractionImage source={liked? LikedButton : LikeButton}/>
                            <LikeAmount>{likersAmount}</LikeAmount>
                        </InteractButton>

                        <Likers>
                        {likers.slice(0, 3).map((pessoa) => {
                            return(
                                <LikerContainer key={pessoa.id}>
                                    <LikerImg source={{uri: pessoa.foto}}/>
                                </LikerContainer>
                                )
                            })
                        }
                        </Likers>
                    </StyledView>
                        
                    <InteractButton onPress={() => deletePiu(piuData.id)} >
                        {piuData.usuario.id === loggedUserData.id
                            ? <InteractionImage source={CloseButton}/>
                            : <></>    
                        }
                    </InteractButton>
                </PiuBottom>
            </Piu2>
        </Container>
    );
}

export default Piu;