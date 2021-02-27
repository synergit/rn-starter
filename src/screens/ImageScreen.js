import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return <View>
        <ImageDetail 
            // title="Push-Up" 
            imageSource={require('../../assets/push-up.jpg')}
            // score={10}
        />
        <Text style={styles.text}>Push-Up  Level(1~10): 10</Text>
        <ImageDetail 
            // title="Plank" 
            imageSource={require('../../assets/plank.jpg')}
            // score={9}
        />
        <Text style={styles.text}>Plank  Level(1~10): 9</Text>
        <ImageDetail 
            // title="Sit-Up" 
            imageSource={require('../../assets/sit-up.jpeg')}
            // score={8}
        />
        <Text style={styles.text}>Sit-Up  Level(1~10): 8</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "center",
      },
});

export default ImageScreen;