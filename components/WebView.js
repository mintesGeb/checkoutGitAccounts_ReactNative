import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function BrowserView({ route }) {
  console.log(route.params.url);
  return (
    <View style={styles.container}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6EF",
    flexDirection: "column",
  },
});
