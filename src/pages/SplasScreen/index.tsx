import {StyleSheet, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {LOGO} from '../../assets';

const SplasScreen = ({navigation}: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}>
        <LOGO />
      </Animated.View>
    </View>
  );
};

export default SplasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#874abd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
