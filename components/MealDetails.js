import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MealDetails({ affordability, complexity, duration }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration} m</Text>
            <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14,
    }
})