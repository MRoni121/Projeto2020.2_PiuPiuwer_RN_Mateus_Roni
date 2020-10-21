import React, { useCallback, useContext, createContext, useState } from 'react';

import api from '../services/api';

import PiuData from '../interfaces/PiuData';
import CompleteUser from '../interfaces/CompleteUser';


interface PiusContextData {
    loggedUserData: CompleteUser;
    otherUserData: CompleteUser;
    getUserData(username: string): Promise<void>;
    getOtherUserData(username: string): Promise<void>;
    postPiu(texto: string): Promise<void>;
    likePiu(piuId: number): Promise<void>;
    favoritePiu(piuId: number): Promise<void>;
    deletePiu(piuId: number): Promise<void>;
    loadPius(): Promise<void>;
    followUser(personId: number): Promise<void>;
    pius: Array<PiuData>;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {

    const [pius, setPius] = useState<PiuData[]>([])
    const [loggedUserData, setLoggedUserData] = useState<CompleteUser>({} as CompleteUser);
    const [otherUserData, setOtherUserData] = useState<CompleteUser>({} as CompleteUser);

    const getUserData = useCallback( async (username: string) => {
        const userResponse = await api.get(`usuarios/?search=${username}`);
        const user = userResponse.data[0];
        setLoggedUserData(user);

    }, [setLoggedUserData]);

    const getOtherUserData = useCallback( async (username: string) => {
        const userResponse = await api.get(`usuarios/?search=${username}`);
        const user = userResponse.data[0];
        setOtherUserData(user);

    }, [setOtherUserData]);

    const loadPius = useCallback(async () => {
        const response = await api.get("/pius/");
        setPius(response.data);
    }, [setPius]);

    const postPiu = useCallback( async (text:string) => {
        await api.post('/pius/', {
            usuario: loggedUserData.id,
            texto: text
        });
        await loadPius();
    }, [loggedUserData, loadPius]);

    const likePiu = useCallback( async (piuId: number) => {
        let piusCopy = [...pius];

        let piuProcurado = piusCopy.filter(piu => piu.id === piuId)[0];

        const likersIds = piuProcurado.likers.map(user => user.id);

        piuProcurado.likers = likersIds.includes(loggedUserData.id) 
            ? piuProcurado.likers.filter(user => user.id !== loggedUserData.id)
            : [...piuProcurado.likers, loggedUserData];
        
        setPius(piusCopy);

        await api.post('/pius/dar-like/', {
            usuario: loggedUserData.id,
            piu: piuId
        });

        await loadPius();
    
    }, [loggedUserData, pius, setPius, loadPius]);

    const favoritePiu = useCallback( async (piuId: number) => {
        let piusCopy = [...pius];

        let piuProcurado = piusCopy.filter(piu => piu.id === piuId)[0];

        const favoritersIds = piuProcurado.favoritado_por.map(user => user.id);

        piuProcurado.favoritado_por = favoritersIds.includes(loggedUserData.id) 
            ? piuProcurado.favoritado_por.filter(user => user.id !== loggedUserData.id)
            : [...piuProcurado.favoritado_por, loggedUserData];
        
        setPius(piusCopy);

        await api.post('/pius/favoritar/', {
            usuario: loggedUserData.id,
            piu: piuId
        });

        await loadPius();
    
    }, [loggedUserData, pius, setPius, loadPius]);

    const deletePiu = useCallback( async (piuId: number) => {
        let piusCopy = [...pius];

        let validPius = piusCopy.filter(piu => piu.id !== piuId);

        setPius(validPius);

        await api.delete('/pius/' + piuId );
        await loadPius();
    }, [loadPius, pius, setPius]);

    const followUser = useCallback( async (pessoaId:number) => {
        await api.post('/usuarios/seguir/', {
            usuario_id: pessoaId,
            logado_id: loggedUserData.id
        });
    }, [loggedUserData]);
   

    return (
        <PiusContext.Provider value = {{
            pius,
            loggedUserData,
            otherUserData,
            getUserData,
            getOtherUserData,
            postPiu,
            likePiu,
            favoritePiu,
            deletePiu,
            loadPius,
            followUser,
        }} >
            {children}
        </PiusContext.Provider>

    );
}


const usePius = () => useContext(PiusContext);

export default usePius;