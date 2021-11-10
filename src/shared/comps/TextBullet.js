import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {secondary, primary} from '../styles/colors';
import {defaultPadding} from '../styles/measures';

export const TextBullet = ({children}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondary,
    padding: defaultPadding,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 4,
  },
  label: {
    color: primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
