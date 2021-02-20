import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ProductView from "./src/screens/productView";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="food-search"
        component={SearchScreen}
        options={({ navigation }) => ({
          title: "find makeup brands",
          headerStyle: { backgroundColor: "#F2C94C" },
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="ProductView"
        component={ProductView}
        options={({ navigation }) => ({
          title: "Product View",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
