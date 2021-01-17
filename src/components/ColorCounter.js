import React from 'react';
import { Text, StyleSheet, Button, View, Image, ColorPropType } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    // console.log(props);
    return <View>
        <Text>{color}</Text>
        <Button onPress={()=>onIncrease()} title={`Increse ${color}`}/>
        <Button onPress={()=>onDecrease()} title={`Decrese ${color}`}/>
    </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;