import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import SafeArea from 'src/modules/common/components/SafeArea';
import {splashStyles as styles} from '../styles/splashStyles';
import {connect} from 'react-redux';
import {getColorScheme} from '../../../values/Colors';

const Colors = getColorScheme();

const Splash = (props) => {
    const {navigation} = props;

    return (
        <SafeArea
            statusBarColor={Colors.primary}
            bottomBarColor={Colors.primary}
            backgroundColor={Colors.primary}>
            <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('src/assets/images/app_icon.png')}
                        resizeMode={'center'}
                    />
            </View>
        </SafeArea>
    );
};


const mapStateToProps = (state) => {
    return {

    };
};


export default connect(mapStateToProps, null)(Splash);
