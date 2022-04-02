import React , {useEffect,useState} from 'react'
import {ActivityIndicator, ScrollView} from "react-native"
import productassets from "../../../assets/products"
//import {Product} from "../../models/index"
import FavoriteProducts from "../../components/FavoriteProducts"
import CategoryFilter from "../../components/CategoryFilter"
import MainProducts from "../../components/MainProducts"
import MessageNotification from "../../components/MessageNotification"
import {Product} from "../../models"
import { DataStore } from 'aws-amplify'

function index() {

    const [products , setProducts] = useState<Product[]>([])
    useEffect(() => {
        const fetchProducts = async () => {
            const results = await DataStore.query(Product)
            setProducts(results)

        }
        fetchProducts()
    },[])

    //console.log("The products x",products)
    if(!products)
    {
        return <ActivityIndicator />
    }

  return (
   <ScrollView style={{backgroundColor:'white',height:'100%'}}>
       <MessageNotification />
       <CategoryFilter /> 
       <FavoriteProducts productArray={products} />
       <MainProducts filtered={false} header={"Pendik"} mainProducts={products} />
   </ScrollView>
  )
}

export default index