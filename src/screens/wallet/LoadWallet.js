import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoundBtn from '../../shared/comps/RoundBtn';
import {defaultBackground, black} from '../../shared/styles/colors';
import {defaultPadding, defaultMargin} from '../../shared/styles/measures';

const LoadWallet = ({route, navigation}) => {
  const {walletName, walletDescription} = route.params;
  console.log('LoadWallet');
  console.log(JSON.stringify({walletName, walletDescription}));
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Load the wallet from</Text>
      <View style={styles.buttonsContainer}>
        <RoundBtn
          title={'Private key'}
          press={() => console.log('Private key')}
        />
        <View style={styles.buttonPadding} />

        <RoundBtn title={'Mnemonics'} press={() => console.log('Mnemonics')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultBackground,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    padding: defaultPadding,
  },
  message: {
    color: black,
    fontSize: 16,
    textAlign: 'center',
    margin: defaultMargin * 4,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
  buttonPadding: {
    height: 15,
  },
});

export default LoadWallet;
