import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const SurveyScreen = () => {
    return (
        <View>
            <TextInput style={styles.input}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default SurveyScreen;