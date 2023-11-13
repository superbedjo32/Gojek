import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { colors, fontType } from '../../theme';
import { ArrowRight2, DiscountShape } from 'iconsax-react-native';
import { promo1, promo2 } from '../../assets/Images';

const Promo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Promo</Text>
            </View>
            <View>
                <KodePromo />
            </View>
            <View style={styles.listCategory}>
                <Text style={category.judul}>Promo menarik buat kamu</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ ...category.item, marginLeft: 10, backgroundColor: colors.AmericanGreen() }}>
                        <Text style={{ ...category.title, color: colors.white() }}>
                            Apa aja
                        </Text>
                    </View>
                    <View style={category.item}>
                        <Text style={category.title}>GoFood</Text>
                    </View>
                    <View style={category.item}>
                        <Text style={category.title}>GoPay</Text>
                    </View>
                    <View style={category.item}>
                        <Text style={category.title}>Promo</Text>
                    </View>
                </ScrollView>
            </View>
            <Main1 />
        </View>
    )
}

const KodePromo = () => {
    return (
        <View style={styles.kodeInput}>
            <View style={styles.textAndIconContainer}>
                <DiscountShape color='#000000' variant='Bold' size={20} style={styles.diskon} />
                <Text style={styles.kodeText}>Masukkan kode Promo</Text>
                <ArrowRight2 color='#000000' variant='Linear' size={20} />
            </View>
        </View>
    )
}

const Main1 = () => {
    return (
        <View style={styles.containerMain1}>
            <Text style={styles.judul}>Biar maik hemat</Text>
            <ScrollView horizontal contentContainerStyle={{ gap: 15 }} showsHorizontalScrollIndicator={true}>
                <View style={{ ...itemHorizontal.cardItem, marginLeft: 10, }}>
                    <ImageBackground
                        style={itemHorizontal.cardImage}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 15 }}
                        source={promo1}>
                    </ImageBackground>
                </View>
                <View style={{ ...itemHorizontal.cardItem, marginRight: 10 }}>
                    <ImageBackground
                        style={itemHorizontal.cardImage}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 15 }}
                        source={promo2}>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

const Main2 = () => {

}

export default Promo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    header: {
        width: 'auto',
        height: 60,
        alignItems: 'flex-start',
        backgroundColor: colors.white(),
        borderBottomWidth: 1,
        borderBottomColor: colors.grey(0.2),
    },
    title: {
        fontFamily: fontType['Pjs-ExtraBold'],
        fontSize: 25,
        color: colors.black(),
        padding: 10,
    },
    kodeInput: {
        backgroundColor: colors.white(),
        marginHorizontal: 20,
        marginTop: 10,
        width: 'auto',
        height: 40,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: colors.grey(0.2),
    },
    kodeText: {
        fontFamily: fontType['Pjs-Bold'],
        fontSize: 15,
        color: colors.black(),
        paddingVertical: 7,
        left: -40
    },
    textAndIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    diskon: {
        left: -10,
    },
    listCategory: {
        paddingVertical: 10,
    },
    containerMain1: {
        // marginLeft: 10,
    },
    judul: {
        fontFamily: fontType['Pjs-ExtraBold'],
        fontSize: 20,
        color: colors.black(),
        marginLeft: 10,
        marginBottom: 20,
    },
    navigationbutton: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 60,
        elevation: 8,
        paddingBottom: 4,
        marginTop: 230,
    },
    icon: {
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    navText: {
        fontFamily: fontType['Pjs-Bold'],
        fontSize: 10,
        color: colors.black(),
    },
})
const category = StyleSheet.create({
    judul: {
        fontFamily: fontType['Pjs-ExtraBold'],
        fontSize: 20,
        color: colors.black(),
        paddingLeft: 10,
    },
    item: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.grey(0.2),
        alignItems: 'center',
        backgroundColor: colors.white(),
        marginHorizontal: 5
    },
    title: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 12,
        lineHeight: 14,
        color: colors.grey(),
    },
})
const itemHorizontal = StyleSheet.create({
    cardItem: {
        width: 300,
    },
    cardImage: {
        width: '100%',
        height: 140,
        borderRadius: 5,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
});