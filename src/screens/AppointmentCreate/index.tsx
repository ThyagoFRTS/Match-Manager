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

const AppointmentCreate: React.FC = () => {
    const [category, setCategory] = useState('');
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

        <ScrollView style={styles.container}>


            <Header
                title="Create Mach"

            />
            <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                Category
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />
            <View style={styles.form}>
                <TouchableOpacity>
                    <View style={styles.select}>
                        {
                            /*<View style={styles.image} />*/
                            <GuildIcon />
                        }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Select an Server
                            </Text>
                        </View>
                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                    </View>
                </TouchableOpacity>
                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>
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
                        <Text style={styles.label}>
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

    );
}

export default AppointmentCreate;