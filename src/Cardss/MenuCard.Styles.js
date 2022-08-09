import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        marginVertical:10,

        height:250,
        borderWidth:1.5,
        borderColor:'#c17900',
        borderRadius:20,
        justifyContent:'flex-end',
        marginHorizontal:10
        
    },
    menuCardInfo:{
        position: 'absolute',
        width:'100%',
        textAlign:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        fontSize:25,
        color:'white',
        backgroundColor:'black',
        fontWeight:'bold',
        opacity:0.7
    }
})