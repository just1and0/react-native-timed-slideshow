/**
 * @author Luís Mestre <https://github.com/LMestre14>
 */
import { StyleSheet, Platform, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get("window");

export const EXTRA_WIDTH = width * 0.1;
const BAR_HEIGHT = StyleSheet.hairlineWidth * 10;
const FOOTER_HEIGHT = height * 0.25;

export default StyleSheet.create({
    // Main Component Styles
    root: {
        flex: 1,
        backgroundColor: 'gray'
    },

    // Item Styles
    itemContainer: {
        flex: 1,
        width,
        overflow: 'hidden',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    image: {
        height: '100%',
        resizeMode: 'cover',
    },

    arrowImg: {
        width: width * 0.1,
        height: width * 0.1,
    },

    closeImg: {
        position: 'absolute',
        top: 30,
        right: 0,
        width: 50,
        height: 50,
        color: 'white',
    },

    // Footer Styles
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: FOOTER_HEIGHT,
        paddingHorizontal: '7.5%',
        paddingVertical: FOOTER_HEIGHT * 0.2,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },

    progressBarContainer: {
        width: '100%',
        height: BAR_HEIGHT,
        borderRadius: BAR_HEIGHT / 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden',
    },

    progressBar: {
        height: '100%',
        width: '100%',
        borderRadius: BAR_HEIGHT / 2,
        backgroundColor: 'red',
    },

    footerContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    footerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    footerText: {
        fontSize: 20,
        color: 'white',
    },
});