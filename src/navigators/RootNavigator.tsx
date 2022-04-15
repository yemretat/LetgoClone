import React,{useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import {
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import PostNavigator from "./PostNavigator";
import SohbetNavigator from "./SohbetNavigator";
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
import { Storage } from "aws-amplify";

const Tab = createBottomTabNavigator();


function RootNavigator() {
  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    console.log("The image is ",image)
    if(image){
      console.log("pick image onPosttayız")
      onPost()
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const uploadImage = async () => {
    try{
      console.log("uploadun içerisindeyiz")
      const response = await fetch(image)

      const blob = await response.blob()

      const urlParts = image.split('.')

      const extension = urlParts[urlParts.length -1]

      const key= `${uuidv4()}.${extension}`

      await Storage.put(key,blob)
    }
    catch(e){
       console.log(e)
    }
  }
  const onPost = async() => {
    let imageUrl;
    if(!!image)
    {
      console.log("onPost'un içerisindeyiz ")
      imageUrl = await uploadImage()
      console.log("The imageUrl is ",imageUrl)
    }
  }

  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity style={{
          width:70,
          height:70,
          backgroundColor:'#F23F5A',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:35,
          borderWidth:5,
          borderColor:'white',
          marginTop:-18
      }}
      onPress={() => pickImage()}
      >
        <FontAwesome name="camera" size={20} color="white" />
        <Text style={{color:'white',marginTop:2,fontWeight:'600'}}>Sat</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#F24E61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: "#F24E61",
                  position: "absolute",
                  top: -4,
                  right: -10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
              </View>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />
      <Tab.Screen
        name="Sohbet"
        component={SohbetNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-processing"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="İlanlarım"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
