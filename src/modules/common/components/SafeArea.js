import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {connect} from 'react-redux';
const Colors = getColorScheme();


const SafeArea = (props) => {
    const {
        statusBarColor = Colors.black,
        statusBarStyle = 'light-content',
        bottomBarColor,
        backgroundColor = Colors.darkGreyMedium,
        statusBarHidden = false,
        children = null,
        noStatusBar = false,
    } = props;

    return  (
        <>
            {!noStatusBar && (
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle={statusBarStyle || ''}
                    hidden={statusBarHidden}
                    animated={true}
                />
            )}
            <SafeAreaView
                style={[
                    styles.safeAreaTop,
                    {
                        backgroundColor: statusBarColor,
                    },
                ]}
            />
            <SafeAreaView
                style={[
                    styles.safeAreaBottom,
                    {
                        backgroundColor: bottomBarColor ? bottomBarColor : backgroundColor,
                    },
                ]}>
                <View
                    style={[
                        styles.container,
                        {backgroundColor: backgroundColor ? backgroundColor : 'white'},
                    ]}>
                    {children}
                </View>
            </SafeAreaView>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SafeArea);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    safeAreaTop: {
        flex: 0,
    },
    safeAreaBottom: {
        flex: 1,
    },
});
