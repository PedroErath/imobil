import React from "react";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Tab from "./navigation/Tab";
import Realtor from "./screens/Realtor";

function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      {/* <Realtor /> */}
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;