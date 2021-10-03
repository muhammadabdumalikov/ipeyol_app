import { Dimensions, StyleSheet } from "react-native";
import Color from "../constants/Color";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 25,
        left: 20,
    },
    backTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        color: Color.brandOne,
        marginBottom: 2
    },
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        marginTop: height/5,
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#2e64e5",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 35,
        justifyContent: "center",
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: "400",
        color: "grey",
    },
});
