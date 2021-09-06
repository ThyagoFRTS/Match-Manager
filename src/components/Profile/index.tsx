import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../hooks/auth';
import { getRandonMessage } from '../../utils/quietMessages';
import Avatar from '../Avatar';
import { styles } from './styles';

type Props = {
    openModal: () => void;
}

const Profile = ({openModal}: Props) => {
    const {user, singOut} = useAuthContext();
    const [message, setMessage] = useState('');
    
    
    useEffect(()=>{
        setMessage(getRandonMessage())
    },[])

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
                <Text style={styles.message}> {message}</Text>
            </View>
        </View>
    );
}

export default Profile;