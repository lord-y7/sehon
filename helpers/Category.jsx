import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Category = () => {
    const categories = [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
        'Category 7',
        'Category 8',
        'Category 9',
        'Category 10',
    ];

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        key={index}
                        onPress={() => {
                            // Handle category button press
                            console.log(`Pressed: ${category}`);
                        }}
                    >
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Make sure it's a row to allow horizontal scrolling
        height: 50,
    },
    categoryContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Category;
