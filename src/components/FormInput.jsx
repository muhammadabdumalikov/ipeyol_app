import React from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";

import { AntDesign, MaterialIcons } from "react-native-vector-icons";

import styles from "./FormInputStyles";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View
            style={styles.inputContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.iconStyle}>
                <MaterialIcons name={iconType} size={25} color="#666" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;
