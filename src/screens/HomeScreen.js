import React, {useState} from "react";
import { Text, StyleSheet, Button, View, Image,TextInput} from "react-native";

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPwd] = useState('');

  return (
    <View>
      <Text style={styles.text_head}>Welcome to Replay</Text>
      <Text style={styles.text}> Created by Bot Intelligence Team</Text>
      <View style={styles.viewStyle}>
        <Image style={styles.image} source={require('../../assets/team.png')}/>
      </View>
      <Text>Please log in: </Text>
      <Text></Text> 
      <View>
          <Text>User Name</Text>
          <TextInput 
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(newValue)=> setName(newValue)}
          />
          <Text>Password: </Text>
          <TextInput
              secureTextEntry={true} 
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newValue)=> setPwd(newValue)}
          />
          {password.length >= 8 ? 
            <Text style={styles.text_info}>Good</Text> : 
            <Text style={styles.text_info}>Length of password must be longer than 8 characters</Text>}
      </View>
      <View>
        <Button 
            title='Log in'
            onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    // borderColor: "green",
    // borderWidth: 3, 
  },
  text_head: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    alignSelf: "center",
  },
  text_info: {
    fontSize: 10,
    fontStyle: "italic"
  },
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 25
  },
  image:{
    width: '70%',
    height: undefined,
    aspectRatio: 1,
    // borderColor: 'green',
    // borderWidth: 3,
  }
});

export default HomeScreen;
