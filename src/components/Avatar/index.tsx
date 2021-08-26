import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
// import { Container } from './styles';

type Props = {
    urlImage: string,
}

const Avatar = ({urlImage} : Props) => {
    const {primary, line} = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[primary,line]}
        >
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
            />
        </LinearGradient>
    );
  }

export default Avatar;