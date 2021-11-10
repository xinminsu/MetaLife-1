import React from 'react';
import { LogBox } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WholeBottomNavigation } from '../scenes/whole/whole-bottom-navigation.component';
import { WholeDrawer } from '../scenes/whole/whole-drawer.component';
import { LibrariesScreen } from '../scenes/libraries/libraries.component';
import {HomeScreen} from './home.navigator';
import {MessagesScreen} from './messages.navigator';
import {Contacts} from './contacts.navigator';
import {DiscoverScreen} from './discover.navigator';
import {ProfilesScreen} from './profiles.navigator';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Components' : 'Layouts';

const ROOT_ROUTES: string[] = ['Whole', 'Home', 'Messages', 'Contacts', 'Discover', 'Profiles'];

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
  const isNestedRoute: boolean = route.state?.index > 0;
  const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);

  return { tabBarVisible: isRootRoute && !isNestedRoute };
};

const WholeTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        screenOptions={TabBarVisibilityOptions}
        initialRouteName={initialTabRoute}
        tabBar={props => <WholeBottomNavigation {...props} />}>
        <BottomTab.Screen name='Home' component={HomeScreen}/>
        <BottomTab.Screen name='Messages' component={MessagesScreen}/>
        <BottomTab.Screen name='Contacts' component={Contacts}/>
        <BottomTab.Screen name='Discover' component={DiscoverScreen}/>
        <BottomTab.Screen name='Profiles' component={ProfilesScreen}/>
    </BottomTab.Navigator>
);

export const WholeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    drawerContent={props => <WholeDrawer {...props} />}>
    <Drawer.Screen name='Whole' component={WholeTabsNavigator} />
    <Drawer.Screen name='Libraries' component={LibrariesScreen} />
  </Drawer.Navigator>
);

LogBox.ignoreLogs(['Accessing the \'state\'']);
