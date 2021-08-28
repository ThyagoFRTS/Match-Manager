import React from 'react';
import {
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

// import { Container } from './styles';


const ButtonAdd: React.FC<TouchableOpacityProps> = () => {
  return (
      <TouchableOpacity style={styles.container}>
          <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
      </TouchableOpacity>
  );
}

export default ButtonAdd;