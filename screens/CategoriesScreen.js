import { FlatList, StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'
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

    //Searching for a category

    const [list, setList] = useState(CATEGORIES);

    const searchFilter = (text) => {
        const filteredList = CATEGORIES.filter(item => {
            const itemName = item.title.toLowerCase();
            const useTypedText = text.toLowerCase();
            return itemName.indexOf(useTypedText) > -1;
        });
        setList(filteredList);
    }


    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search Your District Name"
                    placeholderTextColor={'#9eecff'}
                    autoCorrect={false}
                    onChangeText={(text) => searchFilter(text)}
                />
            </View>
            <FlatList
                data={list}
                renderItem={renderCategoryItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomColor: '#9eecff',
        borderBottomWidth: 0.5,
        margin: 16,
    },
});