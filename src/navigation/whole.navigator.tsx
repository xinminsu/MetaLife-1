import React from 'react';
import { Image, LogBox } from 'react-native';
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
import {ProfilesNavigator} from './profiles.navigator';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const iconDic = {
    Home_icon_Default: require('../assets/image/tabBtn/Home_icon_Default.png'),
    Home_icon_Selected: require('../assets/image/tabBtn/Home_icon_Selected.png'),
    Messages_icon_Default: require('../assets/image/tabBtn/Messages_icon_Default.png'),
    Messages_icon_Selected: require('../assets/image/tabBtn/Messages_icon_Selected.png'),
    Contacts_icon_Default: require('../assets/image/tabBtn/Contacts_icon_Default.png'),
    Contacts_icon_Selected: require('../assets/image/tabBtn/Contacts_icon_Selected.png'),
    Discover_icon_Default: require('../assets/image/tabBtn/Discover_icon_Default.png'),
    Discover_icon_Selected: require('../assets/image/tabBtn/Discover_icon_Selected.png'),
    Profiles_icon_Default: require('../assets/image/tabBtn/Profiles_icon_Default.png'),
    Profiles_icon_Selected: require('../assets/image/tabBtn/Profiles_icon_Selected.png'),
};

function Ionicons({name, focused, color, size}) {
    return (
        <Image
            source={iconDic[name + '_icon_' + (focused ? 'Selected' : 'Default')]}
        />
    );
}

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Components' : 'Layouts';

const ROOT_ROUTES: string[] = ['Whole', 'Home', 'Messages', 'Contacts', 'Discover', 'Profiles'];

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
  const isNestedRoute: boolean = route.state?.index > 0;
  const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);

  return { tabBarVisible: isRootRoute && !isNestedRoute,
      tabBarIcon: ({focused, color, size}) => (
          <Ionicons
              name={route.name}
              focused={focused}
              size={size}
              color={color}
          />
      ),
  };
};

const WholeTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        screenOptions={TabBarVisibilityOptions}
        initialRouteName={initialTabRoute}>
        <BottomTab.Screen name='Home' component={HomeScreen}/>
        <BottomTab.Screen name='Messages' component={MessagesScreen}/>
        <BottomTab.Screen name='Contacts' component={Contacts}/>
        <BottomTab.Screen name='Discover' component={DiscoverScreen}/>
        <BottomTab.Screen name='Profiles' component={ProfilesNavigator}/>
    </BottomTab.Navigator>
);

export const WholeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    >
    <Drawer.Screen name='Whole' component={WholeTabsNavigator} />
  </Drawer.Navigator>
);

LogBox.ignoreLogs(['Accessing the \'state\'']);
