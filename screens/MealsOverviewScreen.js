import { View, FlatList, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => { return category.id === catId }).title;
        navigation.setOptions({ title: categoryTitle });
    }, [catId, navigation]);


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