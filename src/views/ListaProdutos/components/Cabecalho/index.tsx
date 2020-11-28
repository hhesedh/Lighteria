import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Sacola } from "../../../../components/Sacola";
import {
  COR_DE_FUNDO,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
} from "../../../../styles/styles";

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <Sacola />
      </View>
      <View>
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
    paddingVertical: 24,
    paddingHorizontal: 6,
  },

  titulo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 28,
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
    backgroundColor: COR_DE_FUNDO,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: "#A1A5AA",
  },
});

export default Cabecalho;
