import React from "react";
import { FlatList } from "react-native";
import { DATA } from "../../utils/data";
import Cabecalho from "./components/Cabecalho";
import { Item } from "./components/Produto";

const ListaProdutos = () => {
  return (
    <FlatList
      numColumns={2}
      data={DATA}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Cabecalho />}
      contentContainerStyle={{ marginHorizontal: 24, paddingBottom: 50 }}
    />
  );
};

export default ListaProdutos;
