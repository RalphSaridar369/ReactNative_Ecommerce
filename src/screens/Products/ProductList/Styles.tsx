import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        flex:1
    },
    flatlist_container:{
        alignItems:'center',
        flex:1
    },
    flatlist:{
        marginVertical:10,
    },  
    card:{
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:20,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        flexBasis: '46%',
        marginHorizontal: 5,
    },  
    image:{
        width: null,
        height: 150,
    },
    name:{
        fontSize:16,
        width:'80%'
    },
    filter_by:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    filter_by_header:{
        marginTop:0
    },
    filter_by_value:{
        fontSize:16
    },
    picker_container:{
        alignItems:'center'
    },
    sort_container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingBottom:20
    },
    icon:{
        width:50,
        height:50,
        alignItems:'center',
        borderColor:'#FF6863',
        borderRadius:100,
        borderWidth:0.5,
        padding:10
    },
    icon_text:{
        marginVertical:2,
        color:'#FF6863'
    }
})