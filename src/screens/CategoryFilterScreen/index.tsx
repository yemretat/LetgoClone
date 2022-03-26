import React , {useEffect,useState} from 'react'
import {ScrollView} from "react-native"
import productassets from "../../../assets/products"
import {Category, Product} from "../../models/index"
import MainProducts from "../../components/MainProducts"
import FilteringCategory from "../../components/FilteringCategory"

import MessageNotification from "../../components/MessageNotification"

function index(props) {
    const [products , setProducts] = useState<Product[]>([])
    const [category, setCategory] = useState<Category>(props.route.params.category)
    useEffect(() => {
        setProducts(productassets)
    },[])
  return (
    <ScrollView style={{backgroundColor:'white',height:'100%'}}>
            <FilteringCategory category={category}/> 
           <MessageNotification />
           <MainProducts mainProducts={products} filtered={true} header={"Arama sonuçları (1041464)"} />

    </ScrollView>
    )
}

export default index