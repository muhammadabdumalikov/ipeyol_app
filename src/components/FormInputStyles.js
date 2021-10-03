import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: "100%",
        height: height / 15,
        borderColor: "#ccc",
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    iconStyle: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRightColor: "#ccc",
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: "#333",
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: height / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});