import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const BoxScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.testFlexOneStartStyle}>Child #2</Text>
            <Text style={styles.testFlexTwoEndStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3, 
        borderColor: 'black',
        height: 200,
        // flexDirection: 'row',
        alignItems: "center", 
        // justifyContent: "space-around"
    }, 
    textStyle: { 
        borderWidth: 3, 
        borderColor: 'red',
    },
    testFlexOneStartStyle: {
        borderWidth: 3, 
        borderColor: 'red',
        flex: 1,
        alignSelf: "flex-start", // override parent view
    },
    testFlexTwoEndStyle: {
        borderWidth: 3, 
        borderColor: 'red',
        flex: 2,
        alignSelf: "flex-end",
    }
});

export default BoxScreen;