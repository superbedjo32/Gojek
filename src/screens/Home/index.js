import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home3, DiscountShape, Receipt1 } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { sprite, box, bill, more, scooter, shopping, spoon, train, car, cutlery, fork } from '../../assets/Images';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
        <TextInput
          style={styles.searchbar}
          placeholder="Type Here..."
          placeholderTextColor={colors.black()}
          onChangeText={this.updateSearch}
        />
        <ProfileCircle color='green' variant='Bold' size={45} />
      </View>
      <ScrollView>
        <Image
          source={sprite}
          style={styles.image}
        />
        <Payment />
        <Main />
        <History />
      </ScrollView>
    </View>
  )
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3 color='#00819F' variant='Bold' size={35} style={payment.wallet} />
      <View style={payment.debit}>
        <Text style={payment.saldo}>Rp10.000</Text>
        <Text style={payment.coin}>0 Coins</Text>
      </View>
      <View style={payment.pay} >
        <CardSend color='#00819F' variant='Bold' size={25} />
        <Text style={payment.payText}>Bayar</Text>
      </View>
      <View style={payment.pay}>
        <Clock color='#00819F' variant='Bold' size={25} />
        <Text style={payment.payText}>Riwa...</Text>
      </View>
      <View style={payment.pay}>
        <MoreCircle color='#00819F' variant='Bold' size={25} />
        <Text style={payment.payText}>Lainn...</Text>
      </View>
    </View>
  )
}

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={scooter}
            style={home.icon}
          />
          <Text style={home.goText}>GoRide</Text>
        </View>
        <View style={home.background}>
          <Image
            source={car}
            style={home.icon}
          />
          <Text style={home.goText}>GoCar</Text>
        </View>
        <View style={home.background}>
          <Image
            source={spoon}
            style={home.icon}
          />
          <Text style={home.goText}>GoFood</Text>
        </View>
        <View style={home.background}>
          <Image
            source={box}
            style={home.icon}
          />
          <Text style={home.goText}>GoSend</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={shopping}
            style={home.icon}
          />
          <Text style={home.goText}>GoMart</Text>
        </View>
        <View style={home.background}>
          <Image
            source={bill}
            style={home.icon}
          />
          <Text style={home.goBTText}>GoTagihan</Text>
        </View>
        <View style={home.background}>
          <Image
            source={train}
            style={home.icon}
          />
          <Text style={home.goBTText}>GoTransit</Text>
        </View>
        <View style={home.background}>
          <Image
            source={more}
            style={home.icon}
          />
          <Text style={home.goText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
}

const History = () => {
  return (
    <View style={history.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ gap: 15 }}>
        <View style={history.card}>
          <View style={history.resto}>
            <Text style={history.restoText}>Ayam Goreng Nelongso, Singosari</Text>
            <Image
              source={fork}
              style={history.icon}
            />
          </View>
        </View>
        <View style={history.card}>
          <View style={history.resto}>
            <Text style={history.restoText}>Ayam Goreng Nelongso, Singosari</Text>
            <Image
              source={fork}
              style={history.icon}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: 'auto',
    height: 150,
    objectFit: 'cover',
  },
  header: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  searchbar: {
    width: '80%',
    height: 40,
    borderColor: colors.black(),
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 50,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 12,
  },
  searchIcon: {
    position: 'absolute',
    margin: 15,
    paddingLeft: 40,
    top: 5,
  },
})

const payment = StyleSheet.create({
  container: {
    flex: 1,
    top: -30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  wallet: {
    left: 15,
  },
  saldo: {
    fontSize: 12,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    paddingHorizontal: 10,
  },
  pay: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  payText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
});

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  background: {
    width: 50,
    height: 50,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  goText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 10,
    color: colors.black(),
    top: 12,
  },
  goBTText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 10,
    color: colors.black(),
    top: 12,
    marginHorizontal:-10,
  },
});

const history = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 10,
  },
  resto: {
    width: 250,
    height: 60,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.black(0.4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  restoText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 12,
    color: colors.black(),
    marginHorizontal: 10,
  }
})