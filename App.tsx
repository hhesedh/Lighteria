import { AppLoading } from "expo";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaProdutos from "./src/views/ListaProdutos";

const customFonts = {
  "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = Font.useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutos}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f0f4",
  },
});

export default App;
