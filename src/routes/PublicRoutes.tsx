import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import namePages from "./namePages";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function PublicRoutes() {
    return (
        <Navigator
            initialRouteName={namePages.home}
            screenOptions={{
                tabBarItemStyle: { display: "none" },
                tabBarStyle: { display: "none" },
                headerShown: false
            }}
        >
            <Screen name={namePages.home} component={Home} />
            <Screen name={namePages.login} component={Login} />
            <Screen name={namePages.register} component={Register} />
        </Navigator>
    );
}
