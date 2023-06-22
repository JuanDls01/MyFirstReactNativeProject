import React from 'react';
import {Text, View} from 'react-native';

// type ProfileScreenProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'Home'>;
// };
const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
      {/* <Button
        title="Go to Profile... again"
        onPress={() => navigation.push('Profie')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

export default ProfileScreen;
