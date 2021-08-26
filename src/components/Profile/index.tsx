import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../Avatar';
import { styles } from './styles';

// import { Container } from './styles';

const Profile = () => {
  return (
      <View style={styles.container}>
          <Avatar urlImage="https://github.com/rodrigorgtic.png"/>
          <View>
              <View style={styles.user}>
                  <Text style={styles.greeting}>
                    Olá
                  </Text>

                  <Text style={styles.username}>
                    Olá
                  </Text>
              </View>
              <Text style={styles.message}> Today is a beautiful day</Text>
          </View>
      </View>
  );
}

export default Profile;