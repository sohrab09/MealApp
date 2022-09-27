import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from './../components/MealDetails';

export default function MealDetailScreen({ route }) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} style={{ width: 200 }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                duration={selectedMeal.duration}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => {
                return <Text key={ingredient}>{ingredient}</Text>
            })}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => {
                return <Text key={step}>{step}</Text>
            })}
        </View>
    )
}

const style = StyleSheet.create({

})