import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={styles.main}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});

export default SearchScreen;
