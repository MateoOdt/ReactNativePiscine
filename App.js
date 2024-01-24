import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen } from "./screen/Dashboard/dashboard.screen";
import RegistrationScreen from "./screen/Registration/registration.screen";
import LoginScreen from "./screen/Login/login.screen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Detail" component={DashboardScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
