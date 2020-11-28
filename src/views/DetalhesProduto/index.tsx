import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DATAInterface } from "../../utils/data";
import { Background } from "./components/Background";
import { DescricaoItem } from "./components/DescricaoItem";

// TODO: tipar as rotas
export const DetalhesProduto = ({ route }: any) => {
  const {
    titulo,
    imagem,
    itemDesc,
    itemName,
    preco,
    id,
    estudio,
  }: DATAInterface = route.params;
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <Background />
      <DescricaoItem
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        titulo={titulo}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
