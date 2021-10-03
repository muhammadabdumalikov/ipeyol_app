import { Dimensions, StyleSheet } from "react-native";
import Color from "../constants/Color";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: height,
        padding: 20,
        paddingTop: 50,
        backgroundColor: "white"
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: "cover",
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#2e64e5",
    },
});
