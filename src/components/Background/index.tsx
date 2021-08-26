import React, {ReactNode} from 'react';
import { View } from 'react-native';
import { styles } from './styles';

// import { Container } from './styles';
type Props = {
    children: ReactNode;
}

const Background: React.FC<Props> = ({children}) => {
  return (
      <View style={styles.container}>
          {children}
      </View>
  );
}

export default Background;