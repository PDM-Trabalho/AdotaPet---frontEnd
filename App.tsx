import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";

import { LilitaOne_400Regular } from "@expo-google-fonts/lilita-one";

import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
} from "@expo-google-fonts/inter";

import { AuthProvider } from "./src/contexts/AuthContext";

import "./src/theme/styled.d.ts";

import ligth from "./src/theme/ligth";
import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        LilitaOne_400Regular,
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
    });

    const callback = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    callback();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <AuthProvider>
            <ThemeProvider theme={ligth}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </AuthProvider>
    );
}
