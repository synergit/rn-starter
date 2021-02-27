import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import imageRecog from '../api/imageRecog';
import ImageDetail from '../components/ImageDetail';

const FoodScanScreen = () =>{
    const [results, setResults] = useState([]);
    const imagePath = '/Users/chloe/git/rn-starter/assets/sandwich.jpg'
    const searchApi = async(searchTerm)=>{
        console.debug(searchTerm);
        const response = await imageRecog.post('/api/', {
                'imagepath': searchTerm
        });
        setResults(response.data.result);
        console.debug(response.data.result)
    };
    return (
        <View>
            <Button 
                title="Scan"
                onPress={()=>searchApi(imagePath)}>
            </Button>
            <ImageDetail 
                imageSource={require(imagePath)}
            />
            <Text style={styles.text}>{results}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignSelf: "center",
      },
});

export default FoodScanScreen;