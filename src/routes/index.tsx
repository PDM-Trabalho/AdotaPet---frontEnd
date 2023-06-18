import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { View, Text } from "react-native";

import namePages from "./namePages";
import { style } from "./style";

import Favorites from "../pages/Favorites";
import CreatePet from "../pages/CreatePet";
import Register from "../pages/Register";
import Account from "../pages/Account";
import Details from "../pages/Details";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Home from "../pages/Home";

const { Navigator, Screen, Group } = createBottomTabNavigator();

const optionsIcon = (iconName: string) => {
  return {
    options: ({ route }) => ({
      tabBarIcon: ({ focused, color }) => (
        <View style={style.viewIconStyle}>
          <Ionicons name={iconName} color={color} size={24} />
          {focused && (
            <Text style={[{ color }, style.textStyle]}>{route.name}</Text>
          )}
        </View>
      ),
    }),
  };
};

export default function StackRoutes() {
  const theme: any = useTheme();

  return (
    <Navigator
      initialRouteName={namePages.account}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary_300,
        tabBarInactiveTintColor: theme.color.white_300,
        tabBarActiveBackgroundColor: theme.color.secondary,
        tabBarItemStyle: style.itemStyle,
        tabBarStyle: {
          backgroundColor: theme.color.primary_300,
          height: 64,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        },
        tabBarLabel: "",
      }}
    >
      <Group
        screenOptions={{
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      >
        <Screen name={namePages.home} component={Home} />
        <Screen name={namePages.login} component={Login} />
        <Screen name={namePages.register} component={Register} />
      </Group>

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
