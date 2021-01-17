import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, InteractionManager } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50

const SquareScreen = () =>{
    // console.log(colors);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const inRange = (value, max, min) => {
        return (value <= max) && (value >= min)
    }
    console.log(red, green, blue)

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        switch(color){
            case 'red':       
                inRange(red+change, 255, 0) ? setRed(red+change) : null
                break;
            case 'green':
                inRange(green+change, 255, 0) ? setGreen(green+change) : null
                break;
            case 'blue':
                inRange(blue+change, 255, 0) ? setBlue(blue+change) : null
                break;
            default:
                console.error("not expected color:" + color)
        }
    }
    return (
        <View>
            <ColorCounter 
                onIncrease={()=>setColor('red', COLOR_INCREMENT)} 
                onDecrease={()=>setColor('red', -COLOR_INCREMENT)} 
                color="Red"/>
            <ColorCounter 
                onIncrease={()=>setColor('green', COLOR_INCREMENT)} 
                onDecrease={()=>setColor('green', -COLOR_INCREMENT)} 
                color="Green"/>
            <ColorCounter 
                onIncrease={()=>setColor('blue', COLOR_INCREMENT)} 
                onDecrease={()=>setColor('blue', -COLOR_INCREMENT)} 
                color="Blue"/>
            <View 
                style={{height:200, width: 200, backgroundColor: 
                `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;