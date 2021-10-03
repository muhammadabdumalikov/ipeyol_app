import React from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    ImageBackground,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import adsImage from "../../public/adsImage";

import styles from "./HomeScreenStyles";

const Home = (props) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.topBanner}>
                    <Text>Top big Categories Banner</Text>
                </View>
                <View style={styles.saleBoxWrapper}>
                    <View style={styles.saleTextWrapper}>
                        <Text style={styles.sale}>Flash Sale</Text>
                        <Text>Till this time: ...</Text>
                    </View>
                    <View style={styles.saleProductsWrapper}>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                        <View style={styles.saleProduct}>
                            <Image
                                style={styles.saleProductImage}
                                source={require("../../../assets/users/user-4.jpg")}
                            />
                            <Text style={styles.saleProductName}>Some</Text>
                            <View style={styles.saleProductPriceWrapper}>
                                <Text style={styles.saleProductSalePrice}>
                                    222$
                                </Text>
                                <Text style={styles.saleProductPrice}>
                                    222$
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <SliderBox
                    styles={styles.adsSlider}
                    images={adsImage}
                    sliderBoxHeight={150}
                    autoplay
                    circleLoop
                    paginationBoxVerticalPadding={20}

                />
                <SliderBox images={adsImage} />
                <SliderBox images={adsImage} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
