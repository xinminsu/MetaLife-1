import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilesScreen } from '../screens/profiles/profiles.component';
import NewWalletName from '../screens/wallet/NewWalletName';
import NewWallet from '../screens/wallet/NewWallet';
import LoadWallet from '../screens/wallet/LoadWallet';
import CreateWallet from '../screens/wallet/CreateWallet';
import CreateMnemonics from '../screens/wallet/CreateMnemonics';

const Stack = createStackNavigator();

export const ProfilesNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Profiles' component={ProfilesScreen}/>
        <Stack.Screen name="NewWalletName" component={NewWalletName}/>
        <Stack.Screen name="NewWallet" component={NewWallet}/>
        <Stack.Screen name="LoadWallet" component={LoadWallet}/>
        <Stack.Screen name="CreateWallet" component={CreateWallet}/>
        <Stack.Screen name="CreateMnemonics" component={CreateMnemonics}/>
  </Stack.Navigator>
);
