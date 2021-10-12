import { useRoute } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Search = ({ navigation }) => {
  const [username, setUsername] = useState("asaadsaad");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const onChangeText = (text) => {
    setUsername(text.toLowerCase());
  };

  const searchPressed = () => {
    const fetchAccount = async (account) => {
      try {
        const response = await fetch(`https://api.github.com/users/${account}`);
        // console.log(response);
        if (response.status == "200") {
          const data = await response.json();
          // console.log(data);

          navigation.navigate("Dashboard", { data });
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchAccount(username);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a GitHub user</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="GitHub username"
        value={username}
        onChangeText={onChangeText}
        autoFocus={true}
      />
      <TouchableOpacity style={styles.button} onPress={searchPressed}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48BBEC",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    // marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    height: 50,
    padding: 5,
    marginRight: 5,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    color: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "#111",
    alignSelf: "center",
  },
  button: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default Search;
