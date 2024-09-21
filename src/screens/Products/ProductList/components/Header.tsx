import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get('screen').width
const Header = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.search_bar}>
                <TextInput placeholder="Search" style={styles.search_bar_input} value={props.search} onChangeText={(e)=>props.onChangeText(e)}/>
                <AntDesign name="search1" size={24} color="black" style={styles.search_icon} />
            </View>
            <View style={styles.icons_container}>
                <TouchableOpacity onPress={()=>props.show("filter")}>
                    <AntDesign name="filter" size={34} color="#FF6863" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.show("sort")}>
                    <FontAwesome name="sort" size={34} color="#FF6863" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: screenWidth,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#ECECEC',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search_bar: {
        flex: 3,
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search_bar_input: {
    },
    search_icon: {
        paddingLeft: 10,
    },
    icons_container: {
        flex: 1,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Header