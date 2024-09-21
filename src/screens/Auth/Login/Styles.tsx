import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 200,
        marginVertical: 10,
        paddingVertical: 10
    },
    ButtonText: {
        color: '#fff'
    },
    Header: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 300
    },
    LogoImgContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    LogoImg: {
        borderRadius:20,
        width: 200,
        height: 200,
    },
})