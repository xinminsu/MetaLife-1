import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';

import {defaultBackground, black} from '../../shared/styles/colors';
import {defaultPadding, defaultMargin} from '../../shared/styles/measures';
import RoundBtn from '../../shared/comps/RoundBtn';
import CreateMnemonics from "./CreateMnemonics";

const NewWalletName = ({navigation}) => {
  let stat = {walletName: '', walletDescription: ''};

  const [walletDescription, setWalletDescription] = useState('');

  return (
      <SafeAreaView style={styles.flex1}>
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.message}>Give a name to the new wallet</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Vacations fund"
          underlineColorAndroid="transparent"
          onChangeText={walletName => {
            stat.walletName = walletName;
          }}
        />
        <Text style={styles.message}>Give a description too (optional)</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Ex.: For spending during next vacations"
          onChangeText={walletDescription => {
            stat.walletDescription = walletDescription;
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <RoundBtn
          title={'Next'}
          press={() =>
            navigation.navigate('NewWallet', {
              walletName: stat.walletName,
              walletDescription: stat.walletDescription,
            })
          }
        />
      </View>
    </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: defaultBackground,
    padding: defaultPadding,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: black,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: defaultMargin,
    marginHorizontal: 32,
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 52,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: black,
    padding: 4,
    paddingLeft: 0,
    marginRight: 2,
    textAlign: 'center',
    color: black,
  },
});

export default NewWalletName;
