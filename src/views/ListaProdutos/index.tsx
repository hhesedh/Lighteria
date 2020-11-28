import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { DATA } from "../../utils/data";
import Cabecalho from "./components/Cabecalho";
import { Item } from "./components/Produto";

const ListaProdutos = () => {
  return (
    <View style={styles.containerItem}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />}
        contentContainerStyle={{ marginHorizontal: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 20,
  },
});
export default ListaProdutos;
