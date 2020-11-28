import { AppLoading } from "expo";
import React from "react";
import { Text, SafeAreaView, View, Image, StyleSheet } from "react-native";
import * as Font from "expo-font";

const customFonts = {
  "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
};

const App = () => {
  const [loaded] = Font.useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require("./assets/images/icone-sacola.png")}
            style={styles.imagem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f0f4" },
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  titulo: {
    fontFamily: "OpenSans-ExtraBold",
    fontSize: 28,
  },
  containerSacola: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
});

export default App;
