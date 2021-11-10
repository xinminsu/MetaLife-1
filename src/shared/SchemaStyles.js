import {useStore} from 'react-redux';
import {StyleSheet} from 'react-native';

export const colorsSchema = {
  primary: '#29DAD7',
  inactive: '#F1F1F2',
  textHolder: '#4E586E',
  textGray: '#999999',
  btnInactive: '#EEEEEE',
  inputBG: '#F1F1F2',
};

export const colorsBasics = {
  primary: '#29DAD7',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

export const defaultTheme = {
  dark: false,
  colors: {
    background: colorsBasics.lighter,
    border: colorsBasics.lighter,
    card: colorsBasics.white,
    notification: colorsBasics.white,
    primary: colorsBasics.primary,
    text: colorsBasics.dark,
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    background: colorsBasics.black,
    border: colorsBasics.black,
    card: colorsBasics.black,
    notification: colorsBasics.black,
    primary: colorsBasics.primary,
    text: colorsBasics.light,
  },
};

const stylesDefault = StyleSheet.create({
  BG: {
    backgroundColor: colorsBasics.lighter,
  },
  FG: {
    backgroundColor: colorsBasics.white,
  },
  text: {
    color: colorsBasics.black,
  },
  searchBG: {
    backgroundColor: '#F1F1F2',
  },
  placeholderTextColor: {color: '#B6B7B9'},
});

const stylesDark = StyleSheet.create({
  BG: {
    backgroundColor: colorsBasics.black,
  },
  FG: {
    backgroundColor: colorsBasics.darker,
  },
  text: {
    color: colorsBasics.white,
  },
  searchBG: {
    backgroundColor: '#111717',
  },
  placeholderTextColor: {color: '#7C7E82'},
});

const stylesBasics = StyleSheet.create({
  // layout
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  width100Percent: {
    width: '100%',
  },
  marginTop10: {
    marginTop: 10,
  },
  // base component
  // --btn
  btnActiveBG: {
    borderColor: colorsBasics.primary,
    backgroundColor: colorsBasics.primary,
  },
  btnActiveFG: {
    backgroundColor: colorsBasics.primary,
  },
  btnInactiveBG: {
    borderColor: colorsBasics.primary,
  },
  btnInactiveFG: {
    color: colorsBasics.primary,
  },
  btnDisabledBG: {
    borderColor: colorsSchema.textHolder,
  },
  btnDisabledFG: {
    color: colorsSchema.textHolder,
  },
  // --input
  input: {
    height: 54,
    fontSize: 16,
    marginLeft: 16,
  },
  // --section
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const cache = [];

function populate(darkMode) {
  cache[0] = darkMode;
  cache[1] = {
    ...stylesBasics,
    theme: darkMode ? darkTheme : defaultTheme,
    barStyle: darkMode ? 'light-content' : 'dark-content',
    ...(darkMode ? stylesDark : stylesDefault),
  };
}

/**
 * cacheable styles for dark color schema
 * @returns {*}
 * @constructor
 */
function SchemaStyles() {
  if (cache.length === 0) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const store = useStore();
    const {
      cfg: {darkMode},
    } = store.getState();
    store.subscribe(() => {
      const {
        // eslint-disable-next-line no-shadow
        cfg: {darkMode},
      } = store.getState();
      cache[0] === darkMode || populate(darkMode);
    });
    populate(darkMode);
  }
  return cache[1];
}

export default SchemaStyles;
