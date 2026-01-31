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
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

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
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
        <Stack.Screen
          name="settings-promoter"
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="edit-profile-promoter"
          options={{ title: "Edit Profile" }}
        />
        <Stack.Screen
          name="email-change"
          options={{ title: "Email / Phone" }}
        />
        <Stack.Screen
          name="change-password"
          options={{ title: "Change Password" }}
        />
        <Stack.Screen
          name="linked-accounts"
          options={{ title: "Linked Accounts" }}
        />
        <Stack.Screen
          name="delete-account"
          options={{ title: "Delete/Delete Account" }}
        />
        <Stack.Screen
          name="blocked-accounts"
          options={{ title: "Blocked Accounts" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
