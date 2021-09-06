import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../hooks/auth';
import Avatar from '../Avatar';
import { styles } from './styles';

type Props = {
    openModal: () => void;
}

const Profile = ({openModal}: Props) => {
    const {user, singOut} = useAuthContext();

    function handleSingOut (){

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openModal}>
                <Avatar urlImage={user.avatar}/>
            </TouchableOpacity>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Hello
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}> Today is a beautiful day</Text>
            </View>
        </View>
    );
}

export default Profile;