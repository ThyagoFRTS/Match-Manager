import React from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import ListDivider from '../../components/ListDivider';
import Background from '../../components/Background';
import ListHeader from '../../components/ListHeader';
import BannerImg from '../../assets/banner.png'
import Member from '../../components/Member';
import Header from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import ButtonIcon from '../../components/ButtonIcon';

const AppointmentCreate: React.FC = () => {
    const members = [
        {
            id: '1',
            username: 'Kitana',
            avatar_url: "https://github.com/ThyagoFRTS.png",
            status: "online",

        },
        {
            id: '2',
            username: 'Shiro',
            avatar_url: "https://github.com/ThyagoFRTS.png",
            status: "Offiline",

        }
    ]

    return (
        <Background>
            <Header
                title="Details"
                action={
                    <TouchableOpacity>
                        <Fontisto name="share" size={24} color={theme.colors.secondary} />
                    </TouchableOpacity>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendarios
                    </Text>
                    <Text style={styles.subtitle}>
                        Olha a akali sup aí, challenger vibes
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="total 3" />
            <FlatList
                data={members}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Join Match" />
            </View>
        </Background>
    );
}

export default AppointmentCreate;