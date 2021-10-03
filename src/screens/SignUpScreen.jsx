import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { AuthContext } from "../navigation/AuthProvider.android";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import styles from "./SignUpScreenStyles";
import Color from "../constants/Color";

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const { register } = useContext(AuthContext);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const showTimepicker = () => {
        showMode("time");
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <TouchableOpacity
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
            >
                <View style={styles.backTextWrapper}>
                    <Ionicons
                        name="md-chevron-back"
                        size={32}
                        color={Color.brandOne}
                    />
                    <Text style={styles.backText}>Login</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.text}>Create an account</Text>

            <FormInput placeholderText="Ismingiz" iconType="text-rotation-none"/>

            <FormInput placeholderText="Familyangiz" iconType="text-rotation-none"/>

            <FormInput placeholderText="Telefon raqami" iconType="local-phone" />

            <FormInput placeholderText="Tug'ilgan sana" onFocus={showDatepicker} value={date.toLocaleDateString()} iconType="date-range"/>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="email"
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

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) =>
                    setConfirmPassword(userPassword)
                }
                placeholderText="Confirm Password"
                iconType="lock-open"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{" "}
                </Text>
                <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
                    <Text
                        style={[styles.color_textPrivate, { color: "#e88832" }]}
                    >
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
                    Privacy Policy
                </Text>
            </View>

            {Platform.OS === "android" ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign Up with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        onPress={() => {}}
                    />

                    <SocialButton
                        buttonTitle="Sign Up with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        onPress={() => {}}
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.navButtonText}>
                    Have an account? Sign In
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SignUpScreen;
