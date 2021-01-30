import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
    },
    emailInput: {
        backgroundColor: '#232129',
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        backgroundColor:  '#232129',
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    enterButton: {
        backgroundColor: '#312e38',
        borderColor: '#FFA500',
        opacity: 0.7,
        borderWidth: 2,
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 25,
    },
    enterButtonText: {
        color: '#FFA500',
        fontWeight: 'bold',
    },
    catImg: {
        width: 100,
        height: 120,
    },
});

export default styles;
