import React,{useEffect,useState} from 'react'
import {View,FlatList,Text, ActivityIndicator} from "react-native"
import MessageItem from "../../components/MessageItem"
import { DataStore } from 'aws-amplify'
import { Message } from '../../models'
function index() {
  const [messages,setMessages] = useState<Message[]>([])

  useEffect(() => {
    DataStore.query(Message).then(setMessages)
  })
  if(!messages)
    return <ActivityIndicator />
  return (
    <View>
        <FlatList
            data={messages}
            renderItem={({item}) => <MessageItem item={item} />}
        />
    </View>
  )
}

export default index