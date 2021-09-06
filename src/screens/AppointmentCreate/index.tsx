import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert
} from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { COLLECTION_APPOINTMENTS } from '../../configs/storage';

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

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');
    const nav = useNavigation();


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

    function validationForm() {
        if (!guild) {
            return false;
        }
        if (
            category === '' ||
            day === '' ||
            month === '' ||
            hour === '' ||
            minute === '' ||
            description === ''
            
        ) {
            return false;
        }
        return true;
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} in ${hour}:${minute}h`,
            description
        }
        if (validationForm()){
            const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
            const appointments = storage ? JSON.parse(storage) : [];
    
            await AsyncStorage.setItem(
                COLLECTION_APPOINTMENTS,
                JSON.stringify([...appointments, newAppointment])
            );
    
            nav.goBack();
        }else {
            Alert.alert('Invalid Fieds','Verify content fields')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView >


                <Header
                    title="Create Match"

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
                                    <GuildIcon guildId={guild.id} iconId={guild.icon} />
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
                                Day and month
                            </Text>
                            <View style={styles.column}>
                                <SmallInput
                                    maxLength={2}
                                    onChangeText={setDay}
                                />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput
                                    maxLength={2}
                                    onChangeText={setMonth}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.label, { marginBottom: 12 }]}>
                                Hour and minute
                            </Text>
                            <View style={styles.column}>
                                <SmallInput
                                    maxLength={2}
                                    onChangeText={setHour}
                                />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput
                                    maxLength={2}
                                    onChangeText={setMinute}
                                />
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
                        onChangeText={setDescription}
                    />
                    <View style={styles.footer}>
                        <Button title="Create" onPress={handleSave} />
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