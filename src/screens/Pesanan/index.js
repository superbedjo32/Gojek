import { View, Text } from 'react-native'
import React from 'react'
import { colors, fontType } from '../../theme'

const Pesanan = () => {
  return (
    <View>
      <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], fontSize: 35, color: colors.black(), }}>HALAMAN PESANAN</Text>
    </View>
  )
}

export default Pesanan