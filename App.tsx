import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationModule} from './src/models/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createApolloClient} from './src/api/apolloClient';
import List from './src/screens/list';
import 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/client';

const RootStack = createStackNavigator<NavigationModule.ParamList>();
const apolloClient = createApolloClient();

const App = () => (
  <ApolloProvider client={apolloClient}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="List"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="List" component={List} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </ApolloProvider>
);

export default App;
