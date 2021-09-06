import React from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Alert,
    Share,
} from 'react-native';
import ListDivider from '../../components/ListDivider';
import Background from '../../components/Background';
import ListHeader from '../../components/ListHeader';
import BannerImg from '../../assets/banner.png'
import Member from '../../components/Member';
import Header from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import ButtonIcon from '../../components/ButtonIcon';
import { AppointmentProps, AuthParams, MemberProps } from '../../global/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { api } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import Load from '../../components/Load';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking'

type Props = NativeStackScreenProps<AuthParams, 'AppointmentDetails'>;

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

const AppointmentDetails: React.FC<Props> = ({ route, navigation }) => {
    const { guildSelected } = route.params;
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            Alert.alert('Verify server settings, allows Widget in Server Settings > Widget')
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        if(widget.instant_invite == null){
            Alert.alert('Null instant invite', 'Verify your owner permissions')
        }else{

            const message = Platform.OS === 'ios' ?
                `Entry in ${guildSelected.guild.name}`
                : `Entry in ${guildSelected.guild.name}`;
            Share.share({
                message,
                url: widget.instant_invite,
            });
        }


    }


    function handleOpenGuild() {
        if (widget.instant_invite == null){
            Alert.alert('Null instant invite','Verify your owner permissions')
        }else{
            Linking.openURL(widget.instant_invite);
        }
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    return (
        <Background>
            <Header
                title="Details"
                action={
                    guildSelected.guild.owner &&
                    <TouchableOpacity onPress={handleShareInvitation}>
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
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            {loading ? <Load /> :
                <>
                    <ListHeader 
                        title="Jogadores" 
                        subtitle={
                            widget.id? 
                        `total: ${widget.members.length}`
                        :
                        `total: ${0}`
                        }
                    />
                    <FlatList
                        data={widget.members}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.members}
                    />
                </>
            }
            {guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon title="Join Match" onPress={handleOpenGuild} />
                </View>
            }
        </Background>
    );
}

export default AppointmentDetails;