import React,{useEffect, useState} from 'react'
import {ScrollView , TouchableOpacity,Image, Text} from "react-native"
import categoriesData from "../../../assets/categories"
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'
import styles from "./styles"
function index() {
    const [categories,setCategories] = useState<Category[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        setCategories(categoriesData);
        return () => {
            setCategories([])
        }
    })
    console.log("Categories ",categories)
  return (
    <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollStyle}
    >
        {categories.map((item:Category) => (
            <TouchableOpacity onPress={() => navigation.navigate("CategoryFiltering",{category:item})} style={styles.center}>
                <Image source={item.src} style={styles.image} />
                <Text style={{fontSize:11, color:'#767575',fontWeight:'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default index