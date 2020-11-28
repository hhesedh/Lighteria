import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { WHITE } from "../../../../styles/styles";
import { DATAInterface } from "../../../../utils/data";

export const DescricaoItem: React.FC<DATAInterface> = ({
  titulo,
  imagem,
  itemDesc,
  itemName,
  preco,
  id,
  estudio,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <Text>{titulo}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
  },
  itemPosicao: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: "80%",
    elevation: 4,
  },
});
