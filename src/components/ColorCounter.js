import React from 'react';
import { Text, StyleSheet, Button, View, Image, ColorPropType } from 'react-native';

const ColorCounter = ({color}) => {
    // console.log(props);
    return <View>
        <Text>{color}</Text>
        <Button title={`Increse ${color}`}/>
        <Button title={`Decrese ${color}`}/>
    </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;