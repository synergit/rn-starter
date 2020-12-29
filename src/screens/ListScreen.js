import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Sophia', age: 10},
        {name: 'Sarah', age: 6},
        {name: 'Chloe', age: 20},
        {name: 'Ashley', age: 11},
        {name: 'Angela', age: 9}
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
                // item === {name: ""},
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
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