import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./AuthProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import OnBoard from "../components/OnBoard";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    // useEffect(() => {
    
    // }, []);

    // if (isFirstLaunch === null) {
    //     return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    // } else if (isFirstLaunch == true) {
    //     routeName = "Onboarding";
    // } else {
    //     routeName = "Login";
    // }

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Onboarding"
                component={OnBoard}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerStyle: {
                        backgroundColor: "#f9fafd",
                        shadowColor: "#f9fafd",
                        elevation: 0,
                    },
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
