import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Sophia', age: 10, workout: 'Tennis', calory: '315 cal'},
        {name: 'Sarah', age: 6, workout: 'Dance', calory: '108 cal'},
        {name: 'Chloe', age: 20, workout: 'Outdoor run', calory: '222 cal'},
        {name: 'Ashley', age: 11, workout: 'Pool Swim', calory: '305 cal'},
        {name: 'Angela', age: 9, workout: 'Jump Rope', calory: '287 cal'},
    ];

    // const friends = [
    //     {name: 'Sophia', key: '0'},
    //     {name: 'Sarah', key: '1'},
    //     {name: 'Chloe', key: '2'}
    // ];
    return (
        <FlatList
            // horizontal={false}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator
            keyExtractor={friends => friends.name} 
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age} - {item.workout}, {item.calory}</Text>;
            }}  
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 20
    }
});

export default ListScreen;