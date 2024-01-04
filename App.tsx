import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StorybookUIRoot from './.ondevice/Storybook';

const App = () => {
  if (process.env.IS_STORYBOOK === 'storybook') {
    return <StorybookUIRoot />;
  }
  return (
    <SafeAreaView>
      <Text>{'native App'}</Text>
    </SafeAreaView>
  );
};

export default App;
