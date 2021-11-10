import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {defaultBackground, black} from '../../shared/styles/colors';
import {defaultPadding, defaultMargin} from '../../shared/styles/measures';
import RoundBtn from '../../shared/comps/RoundBtn';

const NewWallet = ({route, navigation}) => {
  const {walletName, walletDescription} = route.params;
  console.log('NewWallet');
  console.log(JSON.stringify({walletName, walletDescription}));
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.message}>
          Do you already have a wallet to configure?
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <RoundBtn
          title={'Yes, load it'}
          press={() =>
            navigation.navigate('LoadWallet', {
              walletName: walletName,
              walletDescription: walletDescription,
            })
          }
        />
        <View style={styles.buttonPadding} />
        <RoundBtn
          title={'No, create new'}
          press={() =>
            navigation.navigate('CreateWallet', {
              walletName: walletName,
              walletDescription: walletDescription,
            })
          }
        />
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
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  message: {
    color: black,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: defaultMargin,
    marginHorizontal: 32,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
  buttonPadding: {
    height: 15,
  },
});

export default NewWallet;
