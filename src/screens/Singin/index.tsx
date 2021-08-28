import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
} from 'react-native';

import ButtonIcon from '../../components/ButtonIcon';
import { AuthParams } from '../../global/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { styles } from './styles';
import IllustrationImg from '../../assets/GwenFixed.png'
//Original image in: https://www.zerochan.net/3300990

type Props = NativeStackScreenProps<AuthParams, 'Singin'>;



const Singin : React.FC<Props>  = ({navigation}) => {

    function handleSingin(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{'\n'}e organize suas{'\n'}jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title={"Entrar com o Discord"}
                    activeOpacity={0.7}
                    onPress={handleSingin}    
                
                />
                
            </View>
        </View>
    );
}

export default Singin;