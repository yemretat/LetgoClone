import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productsContainer :{width:'96%',marginLeft:'4%'},
    titleProducts:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        marginRight:'4%'
        //backgroundColor:'red'
        
    },
    topicTitle:{
        fontWeight:'bold',
        fontSize:16
    },
    detailTitle:{
        fontWeight:'bold',
        fontSize:14,
        color:'#F24E61'
    }
})

export default styles;