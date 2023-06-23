import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';

type ProfileScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};
const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Profile... again"
        onPress={() => navigation.push('Profile')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
