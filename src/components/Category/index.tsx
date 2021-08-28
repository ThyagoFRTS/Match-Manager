import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';
// import { Container } from './styles';


type Props = TouchableOpacityProps & {
    title: string;
    Icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

const Category: React.FC<Props> = ({
    title,
    Icon,
    hasCheckBox = false,
    checked = false,
    ...rest }) => {
    
    const { primary, line } = theme.colors;

    return (
        <TouchableOpacity {...rest}>

            <LinearGradient
                style={styles.container}
                colors={[theme.colors.background, theme.colors.line]}
            >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    {
                        hasCheckBox?
                            <View style={checked ? styles.checked : styles.check} />
                        :
                            false
                    }
                    

                    <Icon width={48} height={48} />
                    <Text style={styles.title}> {title} </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default Category;