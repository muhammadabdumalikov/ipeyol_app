import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: "100%",
        height: height / 15,
        padding: 10,
        flexDirection: "row",
        borderRadius: 3,
    },
    iconWrapper: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontWeight: "bold",
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
