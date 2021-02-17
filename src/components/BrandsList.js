import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const BrandsList = ({ title, products }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.title}> {products.length} </Text>
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

export default BrandsList;
