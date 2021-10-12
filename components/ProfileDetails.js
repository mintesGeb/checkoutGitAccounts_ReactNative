import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Separator from "./Separator";
import Badge from "./Badge";

const ProfileDetails = ({
  route: {
    params: { account },
  },
}) => {
  const detailsArr = [
    "company",
    "location",
    "followers",
    "following",
    "email",
    "bio",
  ];

  return (
    <SafeAreaView>
      <Badge
        userInfo={{
          avatar_url: account.avatar_url,
          name: account.name,
          login: account.login,
        }}
      />
      {detailsArr.map((item) => {
        return (
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{item.toUpperCase()}</Text>
            <Text style={styles.rowContent}>{account[item]}</Text>
            <Separator />
          </View>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: "#48BBEC",
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});
export default ProfileDetails;
