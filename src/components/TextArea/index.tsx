import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
// import { Container } from './styles';

const TextArea: React.FC<TextInputProps> = ({...rest}) => {
    return (
        <TextInput
            style={styles.container}
            {...rest}
            
        />
    );
}

export default TextArea;