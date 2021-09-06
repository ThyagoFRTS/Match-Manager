import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps,
    TouchableWithoutFeedback
} from 'react-native';
import Background from '../Background';
import { styles } from './styles';

// import { Container } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    small?: boolean, 
    closeModal: () => void;
}

const ModalView: React.FC<Props> = ({ children, closeModal, small =  false, ...rest }) => {
    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={ styles.overlay}>
                    <View style={[small ? styles.smallContainer : styles.container]}>

                        <View style={styles.bar} />
                        {children}


                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
}

export default ModalView;