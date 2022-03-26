import React , {useEffect,useState} from 'react'
import {ScrollView} from "react-native"
import productassets from "../../../assets/products"
import {Product} from "../../models/index"
import FavoriteProducts from "../../components/FavoriteProducts"
import CategoryFilter from "../../components/CategoryFilter"
import MainProducts from "../../components/MainProducts"
import MessageNotification from "../../components/MessageNotification"

function index() {

    const [products , setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productassets)
    },[])

    //console.log("The products x",products)

  return (
   <ScrollView style={{backgroundColor:'white',height:'100%'}}>
       <MessageNotification />
       <CategoryFilter /> 
       <FavoriteProducts />
       <MainProducts filtered={false} header={"Pendik"} mainProducts={products} />
   </ScrollView>
  )
}

export default index