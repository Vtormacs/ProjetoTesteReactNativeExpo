
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { StyleSheet, Text, View } from "react-native";
const Card = (props: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    width: '100%',
    borderRadius: 35,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  }
});
