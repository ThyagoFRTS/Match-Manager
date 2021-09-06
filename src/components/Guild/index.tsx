import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { GuildProps } from '../../global/types';
import GuildIcon from '../GuildIcon';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';

// import { Container } from './styles';

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

const Guild: React.FC<Props> = ({ data, ...rest }) => {
    return (

        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon guildId={data.id} iconId={data.icon} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title} >{data.name}</Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrator' : 'Guest'}
                    </Text>
                </View>
            </View>
            <Feather name="chevron-right" color={theme.colors.secondary} size={24} />
        </TouchableOpacity>

    );
}

export default Guild;