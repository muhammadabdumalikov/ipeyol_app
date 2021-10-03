import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
} from "react-native";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import SocialButton from "../../components/SocialButton";

import styles from "./LoginScreenStyles";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("../../../assets/1.png")} style={styles.logo} />
            <Text style={styles.text}>RN Social App</Text>

          
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="local-phone"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock-open"
                secureTextEntry={true}
            />

            <FormButton buttonTitle="Sign In" onPress={() => {}} />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {Platform.OS === "android" ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        onPress={() => {}}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        onPress={() => {}}
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => {
                    navigation.navigate("SignUp");
                }}
            >
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LoginScreen;
