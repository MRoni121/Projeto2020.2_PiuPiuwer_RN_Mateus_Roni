import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {View} from 'react-native';
import {
    CancelButton,
    CancelImage,
    Contador, 
    Container, 
    ErrorMessage, 
    Header, 
    PiarButton, 
    PiarText, 
    PiuChars, 
    PiuInput, 
    RascunhoTexto
} from './styles';

import CancelImg from '../../assets/images/close.png';

import usePius from '../../hooks/usePius';


const NovoPiu: React.FC = () => {
    const { goBack } = useNavigation();
    const { postPiu, loadPius } = usePius();
    const [error, setError] = useState("");
    const [contador, setContador] = useState(0);
    const [textoPiu, setTextoPiu] = useState("");
        

    const handlePiar = useCallback(() => {
        if(contador === 0){
            setError("Você tem que digitar alguma coisa");
        }
        else if(contador < 140){
            /*postar o piu*/
            postPiu(textoPiu);
            setError("");
            setTextoPiu("");
            setContador(0);
            goBack();
            
        }
    },[contador, textoPiu, setError, setTextoPiu, setContador, postPiu, goBack]);


    const handleInputChange = useCallback((text: string) => {
        setContador(text.length);
        setTextoPiu(text);

        if(text.length >= 140) {
            setError("Você atingiu o limite de caracteres");
        }

        else setError("");

    }, [setContador, setError, setContador, setTextoPiu]);

    const handleCancel = useCallback(() => {
        setError("");
        setTextoPiu("");
        setContador(0);
        goBack();
        
    }, [setError, setTextoPiu, setContador, goBack])

  return (
      <Container>
            <Header>
                <CancelButton onPress={handleCancel}>
                    <CancelImage source={CancelImg}></CancelImage>
                </CancelButton>

                <RascunhoTexto>Rascunho</RascunhoTexto>
            </Header>

            <View>
                <PiuInput 
                    estourado={!!error}
                    autoFocus={true} 
                    placeholder="No que está pensando hoje?"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text => handleInputChange(text)}
                    value={textoPiu} 
                >
                </PiuInput>

                <PiuChars>
                    <ErrorMessage>{error}</ErrorMessage>
                    <Contador estourado={!!error}>{contador}/140</Contador>
                </PiuChars>
            
            </View>
            <PiarButton onPress={handlePiar}>
                    <PiarText>Piar</PiarText>
                </PiarButton>
        </Container> 
    );
}

export default NovoPiu;