import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilesScreen } from '../scenes/profiles/profiles.component';
import NewWalletName from '../scenes/wallet/NewWalletName';
import NewWallet from '../scenes/wallet/NewWallet';
import LoadWallet from '../scenes/wallet/LoadWallet';
import CreateWallet from '../scenes/wallet/CreateWallet';
import CreateMnemonics from '../scenes/wallet/CreateMnemonics';

const Stack = createStackNavigator();

export const ProfilesNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Themes' component={ProfilesScreen}/>
        <Stack.Screen name="NewWalletName" component={NewWalletName}/>
        <Stack.Screen name="NewWallet" component={NewWallet}/>
        <Stack.Screen name="LoadWallet" component={LoadWallet}/>
        <Stack.Screen name="CreateWallet" component={CreateWallet}/>
        <Stack.Screen name="CreateMnemonics" component={CreateMnemonics}/>
  </Stack.Navigator>
);
