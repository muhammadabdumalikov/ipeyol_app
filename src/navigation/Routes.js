import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import firebase from "firebase8/app";
import "firebase8/auth"

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";


const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const OnAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect( () => {
        const subscriber = firebase.auth().onAuthStateChanged(OnAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
           { user ? <AppStack/> : <AuthStack/>}
       </NavigationContainer>
    );
};

export default Routes;
