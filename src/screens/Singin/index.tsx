import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    Alert,
    ActivityIndicator,
} from 'react-native';

import ButtonIcon from '../../components/ButtonIcon';
import { AuthParams } from '../../global/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { styles } from './styles';
import IllustrationImg from '../../assets/GwenFixed.png'
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
//Original image in: https://www.zerochan.net/3300990



const Singin: React.FC = () => {
    const { singIn, loading } = useAuthContext();

    async function handleSingin() {
        //navigation.navigate('Home');
        try {
            await singIn();
        } catch (error) {
            Alert.alert(error)
        }
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

                {
                    loading ?
                        <ActivityIndicator color={theme.colors.primary} />
                        :
                        <ButtonIcon
                            title={"Entrar com o Discord"}
                            activeOpacity={0.7}
                            onPress={handleSingin}
                        />
                }

            </View>
        </View>
    );
}

export default Singin;