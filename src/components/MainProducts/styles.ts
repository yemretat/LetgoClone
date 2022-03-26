import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    productsContainer:{
        width:'92%',
        marginHorizontal:'4%',
    },
    titleProducts:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,
        marginTop:20,
        
    },
    topicTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    topicTitleFiltered:{
        fontWeight:'bold',
        fontSize:18,
    },
    detailTitle:{
        fontWeight:'bold',fontSize:14,color:'#F24E61'
    },
    listContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        backgroundColor:'white',
        width:'100%',
        
    }
})
export default styles