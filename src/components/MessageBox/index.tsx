import React,{useState} from 'react'
import {View,ScrollView,Text,TextInput,Dimensions} from "react-native"

const {height,width} = Dimensions.get('window')

const MessageBox = ({title}:{title:string}) => {
    return(
        <View style={{marginLeft:8, borderRadius:40,backgroundColor:'#FF3E55',height:35,flexDirection:'row',alignItems:'center'}} >
            <Text style={{paddingHorizontal:10,color:'white'}}>{title}</Text>
        </View>
    )
}

function index() {
    const [searchValue , setSearchValue] = useState<string>("Hala müsait mi?")
    const [messages , setMessages] = useState <string[]>(["Hala satılık mı?", "Fiyatta pazalık payı var mı?", "Ne durumda?"])

  return (
    <View style={{position:'absolute',bottom:0,width:'100%',height:height*0.18,backgroundColor:'white',shadowColor:'gray',shadowOpacity:0.4}}>
        <View>
        <ScrollView style={{marginTop:16,marginLeft:5}}  horizontal={true} bounces={true} showsHorizontalScrollIndicator={false} >
            {messages.map((item)=> (
                <MessageBox title={item} />
            ))}
        </ScrollView>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:13,marginLeft:10}}>
            <TextInput style={{height:45,backgroundColor:'#f5f5f5',borderRadius:10,flex:1,paddingLeft:15}} onChangeText={setSearchValue} value={searchValue} />
            <Text style={{fontWeight:'bold',color:'#FF3E55',marginHorizontal:10,fontSize:15}} >Gönder</Text>
        </View>

    </View>
  )
}

export default index