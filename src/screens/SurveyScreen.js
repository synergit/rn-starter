import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const SurveyScreen = () => {
    const [name, setName] = useState('');
    const [password, setPwd] = useState('');

    return (
        <View>
            <Text>Enter name: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            <Text>My name is {name}</Text>
            <Text>Enter password: </Text>
            <TextInput
                secureTextEntry={true} 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue)=> setPwd(newValue)}
            />
            {password.length > 5 ? <Text>Good</Text> : <Text>length of password must be longer than 5 characters</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default SurveyScreen;