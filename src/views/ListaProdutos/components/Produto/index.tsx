import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DATAInterface } from "../../../../utils/data";
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
} from "../../../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export const Item: React.FC<DATAInterface> = ({
  imagem,
  titulo,
  itemDesc,
  itemName,
  preco,
  id,
  estudio,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.navigate("DetalhesProduto", {
          imagem,
          titulo,
          itemDesc,
          itemName,
          preco,
          id,
          estudio,
        })
      }
    >
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: "#fff",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: "#848486",
  },
  imagem: {
    height: 84,
  },
});
