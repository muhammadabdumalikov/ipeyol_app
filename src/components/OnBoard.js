import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from "react-native";
import * as Font from "expo-font";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../assets/colors/colors";
import Color from "../constants/Color";

const data = [
    {
        title: "Iste'dodlarni qo'llab-quvvatlang!",
        text: "Bilimga intiluvchan yoshlarga investitsiya kiriting",
        image: require("../../assets/images/educationSvg/education.png"),
    },
    {
        title: "Ta'lim olish uchun ko'maklashing",
        text: "Har bir insonning yashirin imkoniyatlari mavjud, ammo unda yetarli iqtisodiy-ijtimoiy imkoniyat yetarli bo'lmasligi mumkin",
        image: require("../../assets/images/question/question.png"),
    },
    {
        title: "Spend more time doing the things you love",
        text: "Get started within five minutes",
        image: require("../../assets/images/progrss/progress.png"),
    },
];

async function loadAsync() {
    Font.loadAsync({
        OSBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    });
}

const OnBoard = ({ handleDone }) => {
    const key = (item) => item.title;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    const renderDoneButton = () => {
        return (
            <LinearGradient
                colors={[Color.brandTwo, "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
            >
                <Text style={styles.doneButtonText}>Sign Up</Text>
            </LinearGradient>
        );
    };

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    };

    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    };

    const handleFinish = () => {
        handleDone();
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={key}
                renderItem={renderItem}
                data={data}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                activeDotStyle={{ backgroundColor: "rgba(216,168,50,1)" }}
                dotStyle={{ backgroundColor: "rgba(216,168,50,.3)" }}
                onDone={handleFinish}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.brandOne,
    },
    image: {
        marginVertical: 60,
        width: 250,
        height: 250,
    },
    contentWrapper: {},
    title: {
        fontSize: 24,
        color: colors.white,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 60,
    },
    text: {
        fontSize: 14,
        color: colors.white,
        textAlign: "center",
        marginHorizontal: 60,
        marginTop: 20,
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    leftText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
    },
    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    rightText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
    },
    doneButtonWrapper: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 50,
        borderRadius: 25,
        marginRight: -40,
    },
    doneButtonText: {
        fontSize: 14,
        textAlign: "center",
        margin: 10,
        color: colors.white,
        fontWeight: "bold",
    },
});

export default OnBoard;
