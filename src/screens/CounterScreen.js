import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const INCREMENT = 1

const CounterScreen = () =>{
    const reducer = (state, action) => {
        // return {...state, count: state.count + action.payload}
        // state === {count: number}
        // action === {type: 'increment' || 'decrement', paylad: 1}
        switch (action.type) {
            case 'increment':
                return {...state, count: state.count + action.payload};
            case 'decrement':
                return {...state, count: state.count - action.payload};
            default:
                return state;
        }
    };
    // it is better to define an object in useReducer
    const [state, dispatch] = useReducer(reducer, {count:0});
    
    
    return <View>
        <Button 
            title='Increase'
            onPress={() =>{
                dispatch({type: 'increment', payload: INCREMENT })
            }}
        />
        <Button 
            title='Decrease'
            onPress={() => {
                dispatch({type: 'decrement', payload: INCREMENT })
            }}
        />
        <Text>Current Count:{state.count}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;