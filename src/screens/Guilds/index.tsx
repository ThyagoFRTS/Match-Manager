import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import Guild from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import { GuildProps } from '../../global/types';
import Load from '../../components/Load';

import { styles } from './styles';
import { api } from '../../services/api';


type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

const Guilds: React.FC<Props> = ({ handleGuildSelected }) => {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, [])

    return (
        <View style={styles.container}>

            {loading ?
                <Load />
                :
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
                    contentContainerStyle={{ paddingBottom: 68, paddingTop: 40 }}
                    style={styles.guilds}
                />
            }

        </View>
    );
}

export default Guilds;