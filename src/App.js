import React from "react";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Tab from "./navigation/Tab";
import Realtor from "./screens/RealtorLogin";

function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;