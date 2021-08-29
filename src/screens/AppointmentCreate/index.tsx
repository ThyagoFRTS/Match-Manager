import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import Background from '../../components/Background';

import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Guilds from '../Guilds';
import { GuildProps } from '../../global/types';

const AppointmentCreate: React.FC = () => {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleCategorySelected(categoryId: string) {
        setCategory(categoryId)
    }

    function handleOpenGuildsModal() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuildsModal() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelected(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView >


                <Header
                    title="Create Mach"

                />
                <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                    Category
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={handleCategorySelected}
                    categorySelected={category}
                />
                <View style={styles.form}>
                    <TouchableOpacity onPress={handleOpenGuildsModal}>
                        <View style={styles.select}>
                            {
                                guild.icon ?
                                    <GuildIcon />
                                    :
                                    <View style={styles.image} />
                            }
                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {guild.name ? guild.name : 'Select an Server'}
                                </Text>
                            </View>
                            <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                        </View>
                    </TouchableOpacity>
                    <View style={styles.field}>
                        <View>
                            <Text style={[styles.label, { marginBottom: 12 }]}>
                                Dia e mês
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.label, { marginBottom: 12 }]}>
                                Hora e minuto
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                    </View>

                    <View style={[styles.field, { marginBottom: 12 }]}>
                        <Text style={styles.label} >
                            Descrição
                        </Text>
                        <Text style={styles.charLimit} >
                            Max 100 Characters
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                    <View style={styles.footer}>
                        <Button title="Agendar" />
                    </View>

                </View>

            </ScrollView>
            <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal} >
                <Guilds handleGuildSelected={handleGuildSelected} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}

export default AppointmentCreate;