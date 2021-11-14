import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {generateMnemonics} from '../../shared/utils/wallet';
import {defaultBackground, black} from '../../shared/styles/colors';
import {defaultPadding, defaultMargin} from '../../shared/styles/measures';
import {TextBullet} from '../../shared/comps/TextBullet';

import RoundBtn from '../../shared/comps/RoundBtn';

const CreateMnemonics = ({route, navigation}) => {
  const {walletName, walletDescription} = route.params;
  console.log('CreateMnemonics');
  console.log(JSON.stringify({walletName, walletDescription}));
  let state;
  state = {mnemonics: null};

  function onPressProceed() {
    console.log('onPressProceed');
  }

  function onPressReveal() {
    //const mnemonics = generateMnemonics();
    const mnemonics = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '5',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    state.mnemonics = mnemonics;
  }

  let renderMnemonic;
  renderMnemonic = (mnemonic, index) => (
    <View style={styles.mnemonic} key={index}>
      <TextBullet>{mnemonic}</TextBullet>
    </View>
  );

  function renderBody() {
    const {mnemonics} = state;
    if (!mnemonics) {
      return <RoundBtn title={'Reveal'} press={() => onPressReveal()} />;
    }
    return (
      <View style={styles.mnemonicsContainer}>
        {mnemonics.map(renderMnemonic)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.message}>
        Save carefully your sequence of mnemonics:
      </Text>
      {renderBody()}
      <View style={styles.buttonsContainer}>
        <RoundBtn title={'Proceed'} press={() => console.log('Proceed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: defaultBackground,
    padding: defaultPadding,
  },
  message: {
    color: black,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: defaultMargin,
    marginHorizontal: 32,
  },
  mnemonicsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  mnemonic: {
    margin: 4,
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    height: 104,
  },
});

export default CreateMnemonics;
