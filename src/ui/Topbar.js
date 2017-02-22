import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export const Topbar = (props) => (
  <View style={[styles.container, props.style]}>{/* props styles would overwrite styles container in conflict */}
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1
  }
});
