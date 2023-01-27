import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function ButtonWidget
   ({ bgColor, btnLabel, textColor, onpress }) {
   return (
      <TouchableOpacity onPress={onpress} style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 250, paddingVertical: 10, paddingHorizontal: 30 }}>
         <Text style={{ color: textColor, fontSize: 20, fontWeight: 'bold' }}>{btnLabel}</Text>
      </TouchableOpacity>
   )
}