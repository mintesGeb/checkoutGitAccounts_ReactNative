import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Badge from "./Badge";
import Separator from "./Separator";

function Notes({ route:{params:{account}} }) {
  return (
    <Badge
      userInfo={{
        avatar_url: account.avatar_url,
        name: account.name,
        login: account.login,
      }}
    />
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
