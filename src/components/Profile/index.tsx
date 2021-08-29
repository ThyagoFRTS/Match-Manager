import React from 'react';
import { View, Text } from 'react-native';
import { useAuthContext } from '../../hooks/auth';
import Avatar from '../Avatar';
import { styles } from './styles';


const Profile = () => {
    const {user} = useAuthContext();
    return (
        <View style={styles.container}>
            <Avatar urlImage={user.avatar}/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
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