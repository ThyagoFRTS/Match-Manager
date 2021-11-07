import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect,
} from "react";
import { UserProps } from "../global/types";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_USERS } from "../configs/storage";

const { REDIRECT_URI } = process.env
const { SCOPE } = process.env
const { RESPONSE_TYPE } = process.env
const { CLIENT_ID } = process.env
const { CDN_IMAGE } = process.env

import { api } from "../services/api";
import { string } from "prop-types";


type AuthContextData = {
    user: UserProps;
    loading: boolean;
    singIn: () => Promise<void>;
    singOut: () => Promise<void>
}

type AuthContextProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token? : string;
        error? : string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [loading, setLoading] = useState(false);
    
    async function singIn () {
        try {
            setLoading(true);
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;            
            console.log(authUrl);
            
            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;

            
            if (type === 'success' && !params.error){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`
                
                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
                setUser(userData);  
                 
            }  
        } catch {
            throw new Error('Didnt possible authentication');
        } finally {
            setLoading(false);
        }
    }

    async function singOut() {
        setUser({} as UserProps);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storageUser = await AsyncStorage.getItem(COLLECTION_USERS);
        
        if (storageUser) {
            const userLogged = JSON.parse(storageUser) as UserProps;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
            setUser(userLogged);
        }
    }

    useEffect(()=>{
        loadUserStorageData();
    },[])
    
    return (
        <AuthContext.Provider 
            value={{ user, singIn, loading, singOut }}
        >
            {children}
        </AuthContext.Provider>
    );

}

function useAuthContext (){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuthContext};