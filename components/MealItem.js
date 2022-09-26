import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function MealItem({ title, imageUrl, affordability, complexity, duration }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <Text>{affordability}</Text>
                    <Text>{complexity}</Text>
                    <Text>{duration}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})