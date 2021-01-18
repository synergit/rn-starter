import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const INCREMENT = 1

const CounterScreen = () =>{
    const reducer = (state, action) => {
        return {...state, count: state.count + action.payload}
    };
    // it is better to define an object in useReducer
    const [state, dispatch] = useReducer(reducer, {count:0});
    
    
    return <View>
        <Button 
            title='Increase'
            onPress={() =>dispatch({payload: INCREMENT })}
        />
        <Button 
            title='Decrease'
            onPress={() => dispatch({payload: -INCREMENT })}
        />
        <Text>Current Count:{state.count}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;