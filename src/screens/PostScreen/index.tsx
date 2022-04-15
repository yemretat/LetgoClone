import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { FavoriteProduct } from "../../models";
import FavoriteItem from "../../components/FavoriteItem";
import { DataStore ,Auth} from "aws-amplify";

import { Product } from "../../models";
function index() {
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProduct[]>(
    []
  );

  const [headerTexts, setHeaderTexts] = useState<string[]>([
    "Favoriler",
    "Satıyor",
    "Süresi Dolmuş",
    "Satıldı",
  ]);

  const fetchFavoriteProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser()

    console.log("The user data ",userData.attributes.sub)
    //TODO query only my fav items 
    DataStore.query(FavoriteProduct, (fp) => fp.userSub("eq",userData.attributes.sub)).then(setFavoriteProducts);
  };

  useEffect(() => {
    fetchFavoriteProducts();
  }, []);

  useEffect(() => {
    if(favoriteProducts.filter((fp) => !fp.product).length ===0)
      return ;

    // query all products that are used in favs

    const fetchProducts = async () => {
      var products = await Promise.all(
        favoriteProducts.map((favProd) =>
          DataStore.query(Product, favProd.productID)
        )
      );
    // assign the products to fav items

      setFavoriteProducts((favoriteProducts) =>
        favoriteProducts.map((favProd) => ({
          ...favProd,
          product: products.find((p) => p?.id === favProd.productID),
        }))
      );
    };


    fetchProducts();
  }, [favoriteProducts]);

  //-----------  Real Time Subscriptions ----------------

  useEffect (() => {
      const subscription = DataStore.observe(FavoriteProduct).subscribe(msg => {
          console.log("the msg")
          fetchFavoriteProducts()
      });
      return subscription.unsubscribe()
  },[])


  //----

  if(favoriteProducts.filter((fp) => !fp.product).length !==0)
     return <ActivityIndicator /> ;

  //console.log("The fav products ",favoriteProducts)
  return (
    <View style={{ padding: 13 }}>
      <FlatList
        data={favoriteProducts}
        renderItem={({ item, index }) => <FavoriteItem key={index} product={item.product!!} />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              marginBottom: 15,
              backgroundColor: "#F1F1F1",
            }}
          >
            {headerTexts.map((item, index) => {
              return (
                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: index == 0 ? 3 : 0,
                    borderBottomColor: "#FF3E55",
                  }}
                  key={index}
                >
                  <Text
                    style={{
                      color: index == 0 ? "#FF3E55" : "#797979",
                      fontWeight: index == 0 ? "bold" : "500",
                      fontSize: 15,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
      />
    </View>
  );
}

export default index;
