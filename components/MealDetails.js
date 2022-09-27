import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MealDetails({ affordability, complexity, duration, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration} m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
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