import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: "100%",
        height:  height / 15,
        backgroundColor: "#2e64e5",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
});