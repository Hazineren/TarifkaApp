import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        backgroundColor:'white',
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderColor:'gray',
        margin:10,
        marginVertical:7,
        marginRight:7,
        flexDirection:'row'
    },
    categoryImage:{
        width:85,
        height:85,
        margin:8,
        borderRadius:40
    },
    categoryName:{
        marginVertical:36,
        marginLeft:22,
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    }
})