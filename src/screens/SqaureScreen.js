import React, { useReducer} from 'react';
import { StyleSheet, View, Button, FlatList, Text, InteractionManager } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50;

const SquareScreen = () =>{
    const inRange = (value, max, min) => {
        return (value <= max) && (value >= min)
    }
    //  action: how to change `state` object
    const reducer = (state, action) => {
        // state === {red: #, green: #, blue: #}
        // action === {type: 'change_red', or 'change_green' or 'change_blue', payload: 15 || -15}
        switch(action.type){
            case 'change_red':
                return inRange(state.red + action.payload, 255, 0) 
                ? {...state, red: state.red + action.payload}
                : state;
            case 'change_green':
                return inRange(state.green + action.payload, 255, 0) 
                ? {...state, green: state.green + action.payload}
                : state;
            case 'change_blue':
                return inRange(state.blue + action.payload, 255, 0) 
                ? {...state, blue: state.blue + action.payload}
                : state;
            default:
                console.error("unexpected color")
                return state;
        };
    };


    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;
    console.log(state)
    
    return (
        <View>
            <ColorCounter 
                onIncrease={()=>dispatch({type: 'change_red', payload: COLOR_INCREMENT})} 
                onDecrease={()=>dispatch({type: 'change_red', payload: -COLOR_INCREMENT})} 
                color="Red"/>
            <ColorCounter 
                onIncrease={()=>dispatch({type: 'change_green', payload: COLOR_INCREMENT})}  
                onDecrease={()=>dispatch({type: 'change_green', payload: -COLOR_INCREMENT})}  
                color="Green"/>
            <ColorCounter 
                onIncrease={()=>dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
                onDecrease={()=>dispatch({type: 'change_blue', payload: -COLOR_INCREMENT})}
                color="Blue"/>
            <View 
                style={{height:200, width: 200, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;