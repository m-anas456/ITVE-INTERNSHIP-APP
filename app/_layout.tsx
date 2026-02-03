import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceGrotesk: SpaceGrotesk_400Regular,
    SpaceGroteskBold: SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="settings-promoter" />
          <Stack.Screen name="settings-donor" />
          <Stack.Screen name="edit-profile-promoter" />
          <Stack.Screen name="edit-profile-donor" />
          <Stack.Screen name="email-change" />
          <Stack.Screen name="email-change-donor" />
          <Stack.Screen name="change-password" />
          <Stack.Screen name="change-password-donor" />
          <Stack.Screen name="linked-accounts" />
          <Stack.Screen name="linked-account-donor" />
          <Stack.Screen name="delete-account" />
          <Stack.Screen name="delete-account-donor" />
          <Stack.Screen name="blocked-accounts" />
          <Stack.Screen name="blocked-accounts-donor" />
          <Stack.Screen name="message-setting-donor" />
          <Stack.Screen name="help-center" />
          <Stack.Screen name="report-problem" />
          <Stack.Screen name="privacy-policy" />
          <Stack.Screen name="terms-of-service" />
          <Stack.Screen name="updates" />
        </Stack>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
