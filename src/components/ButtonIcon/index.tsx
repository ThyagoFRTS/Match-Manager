import React from 'react';
import {
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    Image,
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

const ButtonIcon = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default ButtonIcon;