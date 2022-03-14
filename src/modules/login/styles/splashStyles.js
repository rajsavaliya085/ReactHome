import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Platform} from 'react-native';
const Colors = getColorScheme();

export const splashStyles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: '50rem',
        height: '50rem',
    },
    imageContainer: {

    },
    bottomContainer: {
        backgroundColor: Colors.primary,
        paddingBottom: Platform.OS === 'android' ? '22rem' : '10rem',
    },
});
