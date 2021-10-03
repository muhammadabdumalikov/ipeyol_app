import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase8/app"


import OnBoard from "./src/components/OnBoard";
import Providers from "./src/navigation/index";
import Routes from "./src/navigation/Routes";
import Home from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const firebaseConfig = {
  apiKey: "AIzaSyC4IXChdpAysWDemp4LWehvdXkfvlImXaY",
  authDomain: "fulan-app2-3e598.firebaseapp.com",
  projectId: "fulan-app2-3e598",
  storageBucket: "fulan-app2-3e598.appspot.com",
  messagingSenderId: "50094938345",
  appId: "1:50094938345:web:941c3d79e552948d2df878",
  measurementId: "G-HWNDWH75VB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
    const [showOnBoard, setShowOnBoard] = useState(true);

    const handlerOnBoardFinish = () => {
        setShowOnBoard(false);
    };

    return (
        <>
            {showOnBoard && <OnBoard handleDone={handlerOnBoardFinish} />}
            {!showOnBoard && <Providers />}
        </>
    );
};

export default App
