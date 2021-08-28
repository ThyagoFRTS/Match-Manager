import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';


const ButtonAdd: React.FC<TouchableOpacityProps> = ({...rest}) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
        </TouchableOpacity>
    );
}

export default ButtonAdd;