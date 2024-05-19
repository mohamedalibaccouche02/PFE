import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpage from './Loginpage/loginpage';
import { PaperProvider } from 'react-native-paper';
import Calendar from './Calendar/ChauffeurCalendar';
import { ChaufferProvider } from './Calendar/ChaufferContext';  // Import ChaufferProvider

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();  

export default function App() {
  return (
    <PaperProvider>
      <ChaufferProvider>  
        <QueryClientProvider client={queryClient}>  
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen 
                name="Login" 
                component={Loginpage} 
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Calendar" 
                component={Calendar} 
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </ChaufferProvider>
    </PaperProvider>
  );
}