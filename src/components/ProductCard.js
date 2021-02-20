import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image_link }} style={styles.productImage} />
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.details}>
      <Text style={styles.type}>{product.product_type}</Text>
      <Text style={styles.price}>{product.price} USD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    margin: 4,
    borderRadius: 10,
    maxWidth: 210,
    height: 200,
  },

  productImage: {
    width: 160,
    borderRadius: 10,
    marginBottom:5,
    height: 120
  },

  details: {
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProductCard;
