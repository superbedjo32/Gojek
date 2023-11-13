import { View, Text } from 'react-native'
import React from 'react'
import { colors, fontType } from '../../theme'

const Chat = () => {
  return (
    <View>
      <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], fontSize: 35, color: colors.black(), }}>HALAMAN CHAT</Text>
    </View>
  )
}

export default Chat