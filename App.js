import React from "react";
import { ModalCustom } from "./components/Modal-component";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import { ListComponent } from "./components/List-component";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from "./screen/Detail/detail.screen";
import RegistrationScreen from "./screen/Registration/registration.screen";
import LoginScreen from "./screen/Login/login.screen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
