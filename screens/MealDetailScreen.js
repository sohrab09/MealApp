import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MealDetailScreen({ route }) {

    const mealId = route.params.mealId;

    return (
        <View>
            <Text>Meal Detail Screen {mealId}</Text>
        </View>
    )
}

const style = StyleSheet.create({

})