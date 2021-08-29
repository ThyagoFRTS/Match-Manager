import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import CalendarSvg from '../../assets/calendar.svg'
import GuildIcon from '../GuildIcon'
import PlayerSvg from '../../assets/player.svg'
import { AppointmentProps } from '../../global/types'
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';


type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

const Appointments: React.FC<Props> = ({ data, ...rest }) => {
    const [category] = categories.filter(item => item.id === data.category);
    const {primary, on, line} = theme.colors;
    const { owner } = data.guild;
    return (
        <TouchableOpacity {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[primary, line]}
                >
                    <GuildIcon />

                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: '#FFFFFF' }]}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg
                                fill={owner ? primary : on}
                            />

                            <Text style={
                                [
                                    styles.player,
                                    { color: owner ? primary : on }
                                ]}
                            >
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Appointments;