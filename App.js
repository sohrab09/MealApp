import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Stack.Screen
          name="Meals Categories"
          component={CategoriesScreen}
          options={{
            title: 'Favorite Food In Bangladesh',
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
        // options={({ route, navigation }) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   }
        // }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            title: 'Item Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
