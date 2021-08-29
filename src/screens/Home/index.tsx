import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import CategorySelect from '../../components/CategorySelect';
import Appointments from '../../components/Appointments';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import ButtonAdd from '../../components/ButtonAdd';
import Profile from '../../components/Profile';
import { styles } from './styles';

import { AuthParams } from '../../global/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AuthParams, 'AppointmentDetails'>;

const Home: React.FC<Props> = ({ navigation }) => {
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: '',
                owner: true,
            },
            category: '1',
            date: '22/06 as 20h40',
            description: 'Akali sup de cometa é lei, nida top é o dream e kat sup é crime',

        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: '',
                owner: true,
            },
            category: '1',
            date: '22/06 as 20h40',
            description: 'Akali sup de cometa é lei, nida top é o dream e kat sup é crime',

        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: '',
                owner: true,
            },
            category: '1',
            date: '22/06 as 20h40',
            description: 'Akali sup de cometa é lei, nida top é o dream e kat sup é crime',

        },
    ]

    function handleCategorySelected(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile></Profile>
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelected}
                hasCheckBox={false}
            />


            <ListHeader
                title='Partidas Agendadas'
                subtitle='total 6'
            />


            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointments
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                contentContainerStyle={{paddingBottom: 69}}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default Home;