import React, { createContext, useState } from "react";
import { Text } from "react-native";
import firebase from "firebase8/app";
import "firebase8/auth"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase.auth().signInWithEmailAndPassword(
                            email,
                            password
                        );
                    } catch (e) {
                        console.log(e);
                    }
                },
                googleLogin: async () => {
                    try {
                        console.log("googleLogin android");
                    } catch (error) {
                        console.log({ error });
                    }
                },
                fbLogin: async () => {
                    try {
                        console.log("fb login android");
                    } catch (error) {
                        console.log({ error });
                    }
                },
                register: async (email, password) => {
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(
                            email,
                            password
                        );
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await firebase.auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
        >
            <AuthContext.Consumer>{() => children}</AuthContext.Consumer>
        </AuthContext.Provider>
    );
};
