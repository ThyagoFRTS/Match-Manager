import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../Avatar';
import { MemberProps } from '../../global/types';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    data: MemberProps;
}

const Member: React.FC<Props> = ({ data }) => {
    const {on, primary} = theme.colors;
    const isOnline = data.status === 'online';
    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>
                <View style={styles.status}>
                    <View
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline? on : primary
                            }
                        ]}
                    />
                    
                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Available' : 'Out'}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Member;