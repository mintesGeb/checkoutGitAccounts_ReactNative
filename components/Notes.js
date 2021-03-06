import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Badge from "./Badge";
import Separator from "./Separator";

function Notes({
  route: {
    params: { account },
  },
}) {
  const [note, setNote] = React.useState("");
  const [notes, setNotes] = React.useState(["x", "y"]);

  const noteTyped = (text) => {
    setNote(text);
  };
  const submitted = () => {
    setNotes([...notes, note]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Badge
          userInfo={{
            avatar_url: account.avatar_url,
            name: account.name,
            login: account.login,
          }}
        />
        {notes ? (
          <ScrollView>
            {notes.map((n) => {
              return (
                <View style={styles.rowContainer}>
                  <Text>{n}</Text>
                  <Separator />
                </View>
              );
            })}
          </ScrollView>
        ) : null}
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={noteTyped}
          value={note}
          placeholder="New Note"
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={submitted}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  button: {
    height: 60,
    backgroundColor: "#48BBEC",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: "#111",
    flex: 10,
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Notes;
