import { FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

export default function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            })
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
                navigation={navigation}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
        />
    )
}