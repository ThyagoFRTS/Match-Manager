import React from 'react';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
type Props = TouchableOpacityProps & {
    title?: string;
    action?: () => void;
    styled?: boolean,
}
const ButtonSmall: React.FC<Props> = ({ title, action, styled = false, ...rest }) => {
    const models = ['warning', 'bordered'];


    return (
        <TouchableOpacity
            {...rest}
            style={[styles.container, styled ?  styles.bordered : false]}
            onPress={action}
        >
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

export default ButtonSmall;