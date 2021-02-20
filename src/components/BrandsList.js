import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductCard from "./ProductCard";
import { withNavigation } from "@react-navigation/compat";

const BrandsList = ({ title, products, navigation }) => {
  if (!products.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductView", { id: item.id })
              }
            >
              <ProductCard product={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default withNavigation(BrandsList);
