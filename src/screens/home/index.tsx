import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;
