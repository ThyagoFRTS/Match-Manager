import React from 'react';
import { FlatList, View } from 'react-native';
import Guild from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import { GuildProps } from '../../global/types';

import { styles } from './styles';

type Props = {
    handleGuildSelected: (guild : GuildProps) => void;
}

const Guilds: React.FC<Props> = ({handleGuildSelected}) => {
    const guilds = [
        {
            id: '1',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
        {
            id: '2',
            name: 'Nida top',
            icon: 'a',
            owner: true,
        },
        {
            id: '3',
            name: 'Soul',
            icon: 'a',
            owner: true,
        },
        {
            id: '4',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
        {
            id: '5',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
        {
            id: '6',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
        {
            id: '7',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
        {
            id: '8',
            name: 'Akali Sup',
            icon: 'a',
            owner: true,
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered={true} />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 40}}
                style={styles.guilds}
            />
        </View>
    );
}

export default Guilds;