import React from 'react';
import {
    Text,
    View,
    Image,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { styles } from './styles';

import IllustrationImg from '../../assets/GwenFixed.png'
//Original image in: https://www.zerochan.net/3300990
import ButtonIcon from '../../components/ButtonIcon';


const Singin: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
            />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{'\n'}suas jogatinas{'\n'}facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
                </Text>
                <ButtonIcon title={"Entrar com o Discord"}/>
            </View>
        </View>
    );
}

export default Singin;