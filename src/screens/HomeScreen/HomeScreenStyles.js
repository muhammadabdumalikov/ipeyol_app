import { Dimensions, StyleSheet } from "react-native";
import Color from "../../constants/Color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default styles = StyleSheet.create({
    container: {
        height: height,
        padding: 20,
        paddingTop: 50,
        backgroundColor: "white",
    },
    topBanner: {
        height: height / 4,
    },
    saleBoxWrapper: {
        borderRadius: 5,
        borderWidth: .3,
        padding: 10,
        overflow: 'hidden',
        borderColor: "gray"
    },
    saleTextWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },
    saleText: {
        fontWeight: "bold",
        fontSize: 18
    },
    saleProductsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    saleProduct: {
        height: height / 3,
        width: "48%",
        justifyContent: "space-around",
    },
    saleProductImage: {
        width: "100%",
        height: "70%",
        borderRadius: 5,
        overflow: "hidden",
    },
    saleProductName: {
        fontWeight: "bold"
    },
    saleProductPriceWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    saleProductSalePrice: {
        fontWeight: "bold",
        fontSize: 16
    },
    saleProductPrice: {
        textDecorationLine: "line-through",
        color: "gray"
    },
    
});
