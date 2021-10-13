import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import Separator from "./Separator";
import Badge from "./Badge";

function Repositories({
  navigation: { navigate },
  route: {
    params: { account },
  },
}) {
  const [state, setState] = React.useState({
    list: [],
    loading: false,
    error: "",
  });
  useEffect(() => {
    async function fetchRepo(url) {
      let response = await fetch(url);
      let data = await response.json();
      
      setState({ ...state, list: data });
    }
    fetchRepo(account.repos_url);
  }, []);

  const repoPressed = (url) => {
    setTimeout(() => {
      setState({ ...state, loading: false });
      navigate("Web-View", { url });
    }, 1000);
    setState({ ...state, loading: true });
  };

  return (
    <View style={styles.container}>
      <Badge
        userInfo={{
          avatar_url: account.avatar_url,
          name: account.name,
          login: account.login,
        }}
      />
      {state.loading ? <ActivityIndicator size="large" /> : null}
      <ScrollView>
        {state.list.map((item) => {
          return (
            <View style={styles.rowContainer} key={item.id}>
              <TouchableOpacity onPress={() => repoPressed(item.html_url)}>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
              <Text style={styles.description}>{item.description}</Text>
              <Separator />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
  },
  name: {
    color: "#48BBEC",
    fontSize: 18,
    paddingBottom: 5,
  },
  stars: {
    color: "#48BBEC",
    fontSize: 14,
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
  },
});

export default Repositories;
