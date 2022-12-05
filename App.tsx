/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/integration/react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import store, {persistor} from './app/redux';
import AppNavigation from './app/navigation';
import {baseTheme as theme} from './app/themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  enableScreens(/* enableScreens(true) */ true);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <AppNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
