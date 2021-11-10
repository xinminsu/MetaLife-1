import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

/**
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#3rd-party-icon-packages
 */
const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }) => (
    <Image style={style} source={source}/>
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {

    'home': IconProvider(require('../assets/images/icon-home.png')),
    'messages': IconProvider(require('../assets/images/icon-messages.png')),
    'contacts': IconProvider(require('../assets/images/icon-contacts.png')),
    'discover': IconProvider(require('../assets/images/icon-discover.png')),
    'profiles': IconProvider(require('../assets/images/icon-profiles.png')),
  },
};
