import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationModule} from './src/models/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createApolloClient} from './src/api/apolloClient';
import List from './src/screens/list';
import Details from './src/screens/details';
import 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/client';

const RootStack = createStackNavigator<NavigationModule.ParamList>();
const apolloClient = createApolloClient();

const App = () => {
  const navegationRef = useNavigationContainerRef();

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <NavigationContainer ref={navegationRef}>
          <RootStack.Navigator
            initialRouteName="List"
            screenOptions={{headerShown: false}}>
            <RootStack.Screen name="List" component={List} />
            <RootStack.Screen name="Character" component={Details} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
