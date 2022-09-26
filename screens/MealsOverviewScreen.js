import { View, FlatList, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route }) {

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }

        return <MealItem
            {...mealItemProps}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})