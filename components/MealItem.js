import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

export default function MealItem({ id, title, imageUrl, affordability, complexity, duration }) {

    const navigation = useNavigation();

    function navigateToMealDetail() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null
                }
                onPress={navigateToMealDetail}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        affordability={affordability}
                        complexity={complexity}
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    }
})