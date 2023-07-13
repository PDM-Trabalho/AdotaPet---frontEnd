import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { View, Text } from "react-native";

import namePages from "./namePages";
import { style } from "./style";

import Favorites from "../pages/Favorites";
import CreatePet from "../pages/CreatePet";
import Account from "../pages/Account";
import Details from "../pages/Details";
import Search from "../pages/Search";

const { Navigator, Screen, Group } = createBottomTabNavigator();

const optionsIcon = (iconName: string) => {
    return {
        options: ({ route }: OptionsIconProps) => ({
            tabBarIcon: ({ focused, color }: TabBarIconProps) => (
                <View style={style.viewIconStyle}>
                    <Ionicons name={iconName} color={color} size={24} />
                    {focused && (
                        <Text style={[{ color }, style.textStyle]}>
                            {route.name}
                        </Text>
                    )}
                </View>
            ),
        }),
    };
};

interface OptionsIconProps {
    route: RouteProp<Record<string, object | undefined>, string>;
}

interface TabBarIconProps {
    focused: boolean;
    color: string;
}

export default function PrivateRoutes() {
    const theme: any = useTheme();

    return (
        <Navigator
            initialRouteName={namePages.search}
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
            <Screen
                name={namePages.search}
                component={Search}
                {...optionsIcon("search-outline")}
            />

            <Group
                screenOptions={{
                    tabBarItemStyle: { display: "none" },
                }}
            >
                <Screen name={namePages.details} component={Details} />
            </Group>

            <Group
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16,
                        fontFamily: theme.font.primary_700,
                        color: theme.color.primary_dark,
                    },
                }}
            >
                <Screen
                    name={namePages.createPet}
                    component={CreatePet}
                    {...optionsIcon("paw-outline")}
                />
                <Screen
                    name={namePages.favorites}
                    component={Favorites}
                    {...optionsIcon("heart-outline")}
                />
                <Screen
                    name={namePages.account}
                    component={Account}
                    {...optionsIcon("person-outline")}
                />
            </Group>
        </Navigator>
    );
}
