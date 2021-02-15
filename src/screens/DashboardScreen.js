import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";

const DashboardScreen = ({navigation}) => {
  // console.log(props.navigation);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text_head}>Dashboard</Text>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Image')}>
        <Text style={styles.textTouchableOpacity}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Components')}>
        <Text style={styles.textTouchableOpacity}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Friend')}>
        <Text style={styles.textTouchableOpacity}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Food')}>
        <Text style={styles.textTouchableOpacity}>Food Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
      alignItems: "center",
    },
    text_head: {
        fontSize: 40,
        fontWeight: "bold",
      },
    textTouchableOpacity: {
      fontSize: 30,
      // borderColor: 'green',
      // borderWidth: 3,
      alignSelf: "stretch",
      fontStyle: "italic"
    }
  });
  
  export default DashboardScreen;