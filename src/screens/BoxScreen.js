import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const BoxScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.test_FlexTwo_alignStart_Style}>Child #1</Text>
            <Text style={styles.test_FlexTwo_alignCenter_Style}>Child #2</Text>
            {/* <Text style={styles.test_FlexTwo_alignEnd_Style}>Child #3</Text> */}
            <Text style={styles.text_right_top}>Child #4</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        // borderWidth: 3, 
        // borderColor: 'black',
        height: 100,
        // flexDirection: 'row',
        alignItems: "center", 
        // justifyContent: "space-around"
    }, 
    textStyle: { 
        borderWidth: 3, 
        borderColor: 'red',
    },
    test_FlexTwo_alignStart_Style: {
        borderWidth: 3, 
        borderColor: 'red',
        flex: 2,
        alignSelf: "flex-start", // override parent view
        // position: 'absolute', // ignore sibings and pretend no siblings exist
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        // shortcut from Native React
        // ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'blue'
    },
    test_FlexTwo_alignEnd_Style: {
        borderWidth: 3, 
        borderColor: 'red',
        flex: 2,
        alignSelf: "flex-end",
    },
    test_FlexTwo_alignCenter_Style: {
        borderWidth: 3, 
        borderColor: 'red',
        flex: 2,
        alignSelf: "center",
    },
    text_right_top:{
        borderWidth: 3, 
        borderColor: 'red',
        flex: 2,
        height: 50,
        position: 'absolute',
        alignSelf: "flex-end",
    }
});

export default BoxScreen;