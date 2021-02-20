import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";
import BrandsList from "../components/BrandsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchData, brands] = useSearch();

  const filterProductsByCategory = (category) => {
    return brands.filter((product) => {
      return product.category === category;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchData(term)}
      />
      <Text style={{ textAlign: "center", fontStyle: "italic" }}>
        search results found {brands.length}
      </Text>
      <ScrollView>
        <BrandsList
          products={filterProductsByCategory(null)}
          title="cost Effective"
        />
        <BrandsList
          title="high price"
          products={filterProductsByCategory("cream")}
        />
        <BrandsList
          title="Spender"
          products={filterProductsByCategory("liquid")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
  },
});

export default SearchScreen;
