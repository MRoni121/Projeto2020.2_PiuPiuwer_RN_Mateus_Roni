import React, { useCallback, useEffect} from 'react';
import Piu from '../../components/Pius/';

import { AsyncStorage, ScrollView } from 'react-native';
import { Container, LogoContainer, LogoImage, LogoName, PageHeader, PiusContainer } from './styles';

import LogoImg from '../../assets/images/logo.png';
import usePius from '../../hooks/usePius';

const Feed: React.FC = () => {

    const { pius, loadPius, getUserData } = usePius();

    const logout = useCallback( async () =>{
        await AsyncStorage.clear();
    }, [])

    useEffect(() => {
        const loadData = async () => {
            const username = await AsyncStorage.getItem('@Piupiuwer:username');
            if(!!username) await getUserData(username);
            await loadPius();
        }
        loadData();
    }, []);

    return(
        <Container>
            <PageHeader>
                <LogoContainer>
                    <LogoImage source={LogoImg}/>
                    <LogoName>PiuPiuwer</LogoName>
                </LogoContainer>
            </PageHeader>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PiusContainer>
                    {pius.map((piu) =>{
                        return( 
                            <Piu key={piu.id} piuData={piu} />
                        );
                    })}
                </PiusContainer>
            </ScrollView>
        </Container>
    )
}

export default Feed;