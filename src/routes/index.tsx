import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import namePages from "./namePages";
import { style } from "./style";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const { Navigator } = createBottomTabNavigator();

export default async function StackRoutes() {
    const theme: any = useTheme();
    const token = await AsyncStorage.getItem("access_token");

    return (
        <Navigator
            initialRouteName={namePages.home}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarActiveTintColor: theme.color.primary_300,
                tabBarInactiveTintColor: theme.color.white_300,
                tabBarActiveBackgroundColor: theme.color.secondary,
                tabBarItemStyle: style.itemStyle,
                tabBarStyle: {
                    backgroundColor: theme.color.primary_300,
                    height: "7%",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                },
                tabBarLabel: () => null,
            }}
        >
            {token ? <PrivateRoutes /> : <PublicRoutes />}
        </Navigator>
    );
}
