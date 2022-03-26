import React from 'react'
import {View,Text} from "react-native"
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons'; 


function index() {
  return (
    <View style={{height:40,backgroundColor:'#2C2C2C',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
        <MaterialCommunityIcons name="message-processing" size={24} color="#757575" />
        <Text style={{color:'white', fontSize:13,marginLeft:5}}>
            Mesaj Bildirimlerini Aç

        </Text>
        </View>
        <Entypo style={{marginRight:8}} name="chevron-right" size={30} color="#969696" />

    </View>
  )
}

export default index