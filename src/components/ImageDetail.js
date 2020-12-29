import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    // console.log(props);
    return <View>
        <Image style={styles.imageFit} source={imageSource}/>
        <Text>{title}  Level(1~10): {score}</Text>
    </View>
};

const styles = StyleSheet.create({
    imageFit:{
        width: '60%',
        height: undefined,
        aspectRatio: 1
    }
});

export default ImageDetail;