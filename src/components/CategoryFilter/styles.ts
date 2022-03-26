import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get('window')
const styles= StyleSheet.create({
    center:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10

    },

    scrollStyle:{
     //   backgroundColor:'red',
        height:height*0.085,
        marginBottom:20,
        marginTop:20,
        paddingHorizontal:8
    },
    image:{height:52,width:52,borderRadius:26}
})
export default styles