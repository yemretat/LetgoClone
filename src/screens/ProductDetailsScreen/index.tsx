import React, { useState,useEffect } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import ImageCarousel from "../../components/ImageCarousel";
import { Product } from "../../models";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import MappingComponent from "../../components/MappingComponent";
import SocialMedias from "../../components/SocialMedias";
import MessageBox from "../../components/MessageBox";
import {DataStore} from "aws-amplify"

function index(props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if(!props.route.params?.id)
      return;
    const fetchProducts = async () => {
      const result = await DataStore.query(Product,props.route.params.id)
      setProduct(result)
    } 
    fetchProducts()

  },[props.route.params.id])

  if(!product)
  {
    return <ActivityIndicator />
  }

  return (
    <View style={{flex:1}}>
      <ScrollView style={{ flex: 1, backgroundColor: "white",marginBottom:'32%' }} showsVerticalScrollIndicator={false}>
        {/* Image Carousel*/}
        <ImageCarousel images={product.images} />
        <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
          <DetailsTextBox
            price={product.price}
            name={product.name}
            description={product.description}
          />
          <SellerProfile averageRating={product.rating} />
          <MappingComponent />
          <SocialMedias />
        </View>
      </ScrollView>
      <MessageBox />
    </View>
  );
}

export default index;
