import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BottomTabItem = ({
  isFocused,
  options,
  onPress,
  onLongPress,
  label,
}: any) => {
  const renderIcon = () => {
    if (label === 'Quran') {
      return (
        <Icon
          name="book-open"
          color={isFocused ? '#fff' : '#493957'}
          size={isFocused ? 30 : 25}
        />
      );
    } else if (label === 'Bookmark') {
      return (
        <Icon
          name="bookmark"
          color={isFocused ? '#fff' : '#493957'}
          size={isFocused ? 30 : 25}
        />
      );
    } else
      return (
        <Icon
          name="home"
          color={isFocused ? '#fff' : '#493957'}
          size={isFocused ? 30 : 25}
        />
      );
  };
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        paddingBottom: 8,
        height: 60,
      }}>
      <View
        style={{
          backgroundColor: isFocused ? '#673ab7' : 'transparent',
          height: 50,
          width: 50,
          borderRadius: isFocused ? 50 : 0,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: isFocused ? -25 : -5,
        }}>
        {renderIcon()}
      </View>
      <Text style={{color: isFocused ? '#673ab7' : '#493957'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BottomTabItem;
