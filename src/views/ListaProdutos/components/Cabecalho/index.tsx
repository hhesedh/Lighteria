import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require("./../../../../../assets/images/icone-sacola.png")}
            style={styles.imagem}
          />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.texto}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
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

  containerDescricao: {
    paddingHorizontal: 24,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: "#A1A5AA",
  },
  containerTexto: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -46,
  },

  texto: {
    padding: 34,
    backgroundColor: "#F4F0F4",
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    color: "#A1A5AA",
  },
});

export default Cabecalho;
