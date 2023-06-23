import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeSvg, ProfileSvg} from '../svgs';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: undefined,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1}}>
            {route.name === 'Home' ? (
              <HomeSvg color={isFocused ? '#0526E0' : '#707EAE'} />
            ) : (
              <ProfileSvg color={isFocused ? '#0526E0' : '#707EAE'} />
            )}
            <Text style={{color: isFocused ? '#0526E0' : '#707EAE'}}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
