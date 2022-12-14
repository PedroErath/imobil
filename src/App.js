import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Tab from "./navigation/Tab";
import Immobile from "./screens/Immobile";

function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <Immobile />
      {/* <NavigationContainer>
        <Tab />
      </NavigationContainer> */}
    </SafeAreaView>
  )
}

export default App;