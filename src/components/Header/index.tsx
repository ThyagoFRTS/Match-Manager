import React, { ReactNode } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

type Props = {
    title: string;
    action?: ReactNode;
}

const Header: React.FC<Props> = ({ title, action }) => {
    const { background, background10, lineStrong, heading } = theme.colors;
    const nav = useNavigation();
    function handleGoBack() {
        nav.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[background, lineStrong]}
        >
            <TouchableOpacity onPress={handleGoBack}>
                <Feather name='arrow-left' size={24} color={heading} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                action ?
                    <View>
                        {action}
                    </View>
                    :
                    false
            }
        </LinearGradient>
    );
}

export default Header;