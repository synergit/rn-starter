import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return <View>
        <ImageDetail 
            title="Push-Up" 
            imageSource={require('../../assets/push-up.jpg')}
            score={10}
        />
        <ImageDetail 
            title="Plank" 
            imageSource={require('../../assets/plank.jpg')}
            score={9}
        />
        <ImageDetail 
            title="Sit-Up" 
            imageSource={require('../../assets/sit-up.jpeg')}
            score={8}
        />
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;