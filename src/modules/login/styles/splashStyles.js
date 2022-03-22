import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Platform, StyleSheet} from 'react-native';
const Colors = getColorScheme();

export const splashStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    imageContainer: {

    },
    bottomContainer: {
        backgroundColor: Colors.primary,
        paddingBottom: Platform.OS === 'android' ? '22rem' : '10rem',
    },
});
