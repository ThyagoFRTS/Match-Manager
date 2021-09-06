import React, { useState, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';

import CategorySelect from '../../components/CategorySelect';
import Appointments from '../../components/Appointments';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import ButtonAdd from '../../components/ButtonAdd';
import Profile from '../../components/Profile';
import { styles } from './styles';

import { AppointmentProps, AuthParams, GuildProps } from '../../global/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import Load from '../../components/Load';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ModalView from '../../components/ModalView';
import Button from '../../components/Button';
import ModalLogoutContent from '../../components/ModalLogoutContent';

type Props = NativeStackScreenProps<AuthParams, 'AppointmentDetails'>;

const Home: React.FC<Props> = ({ navigation }) => {
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const nav = useNavigation();

    function handleCategorySelected(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    
    function handleAppointmentDetails(guildSelected : AppointmentProps) {
        navigation.navigate('AppointmentDetails',  {guildSelected: guildSelected});
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    function handleOpenLogoutModal() {
        setOpenLogoutModal(true);
    }

    function handleCloseLogoutModal() {
        setOpenLogoutModal(false);
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }
        setLoading(false);

    }
    
    async function clearAsyncData() {
        AsyncStorage.clear();
    }

    //useEffect(()=>{clearAsyncData()},[]);

    useFocusEffect(useCallback(() => {
        loadAppointments();
    },[category]));

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile openModal={handleOpenLogoutModal}/>
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelected}
                hasCheckBox={false}
            />


            <ListHeader
                title='Programmed Matches'
                subtitle={loading ? `total ${0}` : `total ${appointments.length}`}
            />

            {loading ?
                <Load />
                :
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointments
                            data={item}
                            onPress={() => {
                                handleAppointmentDetails(item)
                            }
                        }
                        />
                    )}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            }
            <ModalView small={true} visible={openLogoutModal} closeModal={handleCloseLogoutModal} >
                <ModalLogoutContent goBack={handleCloseLogoutModal}/>
            </ModalView>
        </View>
    );
}

export default Home;