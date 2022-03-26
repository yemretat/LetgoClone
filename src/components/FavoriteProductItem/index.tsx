import React from 'react'
import {View,TouchableOpacity,Text,Image} from "react-native"
import { Product } from '../../models'
import styles from "./styles"
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from "@react-navigation/native"

type productProps ={
    product: Product,
    prodType:string,
}


function index({product,prodType}:productProps) {
    const navgiation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navgiation.navigate("ProductDetails",{product:product}) } style={prodType==="favorite" ? styles.favorite:styles.main}>
        <View style={prodType==="favorite" ? styles.favoriteView:styles.mainView} >
            <Image
                source={{uri:product.image}}
                resizeMode="stretch"
                style={prodType==="favorite" ?styles.favoriteImage:styles.mainImg}
            />
            {prodType==="favorite" && parseInt(product.id)%2 ==1 && (
            <View style={styles.labeledFav}>
                <Text style={{fontSize:9,fontWeight:'500'}}>Öne Çıkan</Text>
            </View>)
            }

            <TouchableOpacity>
            <AntDesign style={{position:'absolute',right:4,bottom:5}} name="heart" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default index