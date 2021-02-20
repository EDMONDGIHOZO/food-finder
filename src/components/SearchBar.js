import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="ios-search-circle" style={styles.sicon} />
      <TextInput
        style={styles.inputtext}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search words here"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        // know if the user done typing
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 55,
    backgroundColor: "#E0E0E0",
    padding: 5,
    borderRadius: 40,
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10
  },

  sicon: {
    fontSize: 34,
    color: "#828282",
    alignSelf: "center",
    marginHorizontal: 10,
  },

  inputtext: {
    textAlign: "left",
    flex: 1,
    fontSize: 18,
  },
});
export default SearchBar;
