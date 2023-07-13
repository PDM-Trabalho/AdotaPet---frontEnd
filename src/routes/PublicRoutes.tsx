import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import namePages from "./namePages";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const { Navigator, Screen, Group } = createBottomTabNavigator();

export default function PublicRoutes() {
    return (
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
    );
}