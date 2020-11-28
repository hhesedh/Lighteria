import { AppLoading } from "expo";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import ListaProdutos from "./src/views/ListaProdutos";

const customFonts = {
  "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
};

const App = () => {
  const [loaded] = Font.useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f0f4",
  },
});

export default App;
