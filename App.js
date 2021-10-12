import "react-native-gesture-handler";

import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import ProfileDetails from "./components/ProfileDetails";
import Notes from "./components/Notes";
import Repositories from "./components/Repositories";
import WebView from "./components/WebView";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={(props) => {
          return {
            headerTitle: props.route.params.data.name,
          };
        }}
      />
      <Stack.Screen name="Profile-Details" component={ProfileDetails} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Repositories" component={Repositories} />
      <Stack.Screen name="Web-View" component={WebView} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
