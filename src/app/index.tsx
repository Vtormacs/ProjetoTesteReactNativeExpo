import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { cities } from "../../data/cities";
import Card from "./card";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <FlatList data={cities} renderItem={({item}) => <Text style={styles.text}>{item.description}</Text> }/> */}
      <View style={styles.cards}>
        <ScrollView style={styles.lista}>

          <FlatList style={styles.lista} data={cities} renderItem={({ item }) => <Card title={item.name} />} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  cards: {
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  lista : {height: "100%", width: "100%" }
});

