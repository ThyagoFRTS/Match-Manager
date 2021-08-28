import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

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