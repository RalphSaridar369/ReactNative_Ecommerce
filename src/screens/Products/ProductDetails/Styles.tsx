import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width
export const styles = StyleSheet.create({
    main: {
        paddingVertical: 10
    },
    product_image: {
        height: 200,
        width: screenWidth
    },
    content_container: {
        paddingHorizontal: 20
    },
    product_name: {
        fontSize: 24
    },
    product_description:{
        fontSize:14
    },
    items_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttons_container: {
        flex: 1
    },
    total_container: {
        flex: 1
    },
    total_label: {
        marginTop: 0,
        alignSelf: 'center'
    },
    total_value: {
        marginTop: 0,
        color:'black',
        alignSelf: 'center',
        fontSize: 22
    }
})