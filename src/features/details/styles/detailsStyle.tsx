import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: '10%',
        width: 300,
        height: 300 
    },
    box: {
        borderRadius: 10,
        backgroundColor: 'grey',
    },
    textNumber: {
        textAlign: 'center',
        color: 'yellow',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
        color: 'yellow'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
        marginHorizontal: '5%',
    },
    textDescription: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10%',
        color: 'yellow',
    }
});

export default Styles;
