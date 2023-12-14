if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {MainNavigator} from './src/navigator/mainNavigator';

const App: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
