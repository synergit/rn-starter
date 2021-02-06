import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Dashboard</Text>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Food')}>
        <Text style={styles.textTouchableOpacity}>Food Scan</Text>
      </TouchableOpacity> */}
      <TouchableOpacity 
          onPress={() => navigation.navigate('Survey')}>
        <Text style={styles.textTouchableOpacity}>Survey</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Image')}>
        <Text style={styles.textTouchableOpacity}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Components')}>
        <Text style={styles.textTouchableOpacity}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('List')}>
        <Text style={styles.textTouchableOpacity}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.textTouchableOpacity}>Records</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Color')}>
        <Text style={styles.textTouchableOpacity}>Color Fun</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Square')}>
        <Text style={styles.textTouchableOpacity}>Square Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  textTouchableOpacity: {
    fontSize: 25,
    fontStyle: "italic"
  }
});

export default HomeScreen;
