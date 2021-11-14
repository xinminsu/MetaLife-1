import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {defaultBackground, black} from '../../shared/styles/colors';
import {defaultPadding, defaultMargin} from '../../shared/styles/measures';
import RoundBtn from '../../shared/comps/RoundBtn';

const CreateWallet = ({route, navigation}) => {
  const {walletName, walletDescription} = route.params;
  console.log('CreateWallet');
  console.log(JSON.stringify({walletName, walletDescription}));
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.message}>
            When creating a new wallet you will receive a sequence of mnemonics
            which represent your "personal password". Anyone with this sequence
            may be able to reconfigure your wallet in any new device. Keep it
            stored as secure as possible. Only you should have access to this
            information.
          </Text>
          <Text style={styles.message}>
            Write it somewhere safe so you can make sure you won't lose it, or
            you may lose permanently all your coins. There is no way to recover
            it later.
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <RoundBtn
          title={'Proceed'}
          press={() =>
            navigation.navigate('CreateMnemonics', {
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
});

export default CreateWallet;
