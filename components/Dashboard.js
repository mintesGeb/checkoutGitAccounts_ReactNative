import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Dashboard = ({
  navigation: { navigate },
  route: {
    params: { data },
  },
}) => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    setAccount(data);
  }, []);

  const profileDetails = () => {
    navigate("Profile-Details", { account });
  };
  const repositories = () => {
    navigate("Repositories", { account });
  };
  const notes = () => {
    navigate("Notes", { account });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePicBox}>
        <Image
          style={styles.image}
          source={{
            uri: account.avatar_url,
          }}
        />
      </View>

      {/* <View style={styles.box}> */}
      <View style={styles.box}>
        <TouchableOpacity style={styles.blue} onPress={profileDetails}>
          <Text style={styles.buttonText}>Profile Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.pink} onPress={repositories}>
          <Text style={styles.buttonText}>Repositories</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.purple} onPress={notes}>
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 0,
  },
  profilePicBox: {
    flex: 2,
  },
  image: {
    height: 350,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 26,
  },
  blue: {
    backgroundColor: "powderblue",
  },
  purple: {
    backgroundColor: "violet",
  },
  pink: {
    backgroundColor: "pink",
  },
});
export default Dashboard;
