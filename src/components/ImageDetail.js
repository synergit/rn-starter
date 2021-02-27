import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

const ImageDetail = ({imageSource/*, title, score*/}) => {
    // console.log(props);
    return <View>
        <Image style={styles.imageFit} source={imageSource}/>
        {/* <Text>{title}  Level(1~10): {score}</Text> */}
        {/* <Text></Text> */}
    </View>
};

const styles = StyleSheet.create({
    imageFit:{
        width: '60%',
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
    }
});

export default ImageDetail;