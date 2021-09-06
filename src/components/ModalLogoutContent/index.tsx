import React from 'react';
import { Text, View } from 'react-native';
import { useAuthContext } from '../../hooks/auth';
import Button from '../Button';
import ButtonSmall from '../ButtonSmall';

import { styles } from './styles';

type Props = {
    goBack?: () => void;
}

const ModalLogoutContent: React.FC<Props> = ({goBack}) => {
    const { singOut } = useAuthContext();
    return (
        <View style={styles.container}>
            <View style={styles.contentText}>
                <Text style={styles.title}>Do you wanna go out?</Text>
            </View>
            <View style={styles.buttons}>
                <ButtonSmall title='Back' action={goBack} styled/>
                <ButtonSmall title='Logout' action={singOut} />
            </View>

        </View>
    )
}

export default ModalLogoutContent;