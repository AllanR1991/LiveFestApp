import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "./src/screens/Splash/Splash";

// Importe das Fontes
import {
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";


import { Onboarding1 } from "./src/screens/Onboarding1/Onboarding1";
import { Onboarding2 } from "./src/screens/Onboarding2/Onboarding2";
import { Onboarding3 } from "./src/screens/Onboarding3/Onboarding3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "./src/screens/Main/Main";
import { Categories } from "./src/screens/Categories/Categories";
import { DetailedCard } from "./src/screens/DetailedCard/DetailedCard";
import { Map } from "./src/components/Map/Map";
import { Favorites } from "./src/screens/Favorites/Favorites";
import { CreateAccount, Register } from "./src/screens/CreateAccount/CreateAccount";
import { RegistrationSuccessful } from "./src/screens/RegistrationSuccessful/RegistrationSuccessful";
import { PasswordRecover } from "./src/screens/PasswordRecover/PasswordRecover";
import { EmailVerification } from "./src/screens/EmailVerification/EmailVerification";
import { PasswordResetSuccessful } from "./src/screens/PasswordResetSuccessful/PasswordResetSuccessful";
import VerificationCode from "./src/screens/VerificationCode/VerificationCode";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { Login } from "./src/screens/Login/Login";
import { SelectedCategory } from "./src/screens/SelectedCategory/SelectedCategory";
import { MapNearby } from "./src/screens/MapNearby/MapNearby";
import { Home } from "./src/screens/Home/Home";
import NearbyPoints from "./src/components/NearbyPoints/NearbyPoints";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapNearby"
          component={MapNearby}
        />
         <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectedCategory"
          component={SelectedCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedCard"
          component={DetailedCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecover"
          component={PasswordRecover}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordResetSuccessful"
          component={PasswordResetSuccessful}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationSuccessful"
          component={RegistrationSuccessful}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
