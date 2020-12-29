import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () =>{
    const greeting = 'Hi, Chloe!'
    const date = <Text>Monday</Text>
    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text style={styles.subHeaderStyle}>{greeting}</Text>
        {date}
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;