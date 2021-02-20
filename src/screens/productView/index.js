import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import makeup from "../../services/makeups";

const ProductView = ({ route: { params } }) => {
  // const { state } = useContext(Context);

  const [product, setProduct] = useState(null);
  const { id } = params;

  const getProduct = async (id) => {
    const response = await makeup.get(`products/${id}.json`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  if (!product) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text>{product.name}</Text>
      </View>
    </>
  );
};

export default ProductView;
