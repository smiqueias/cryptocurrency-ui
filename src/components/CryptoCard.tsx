import { StyleSheet, Text, View, Image } from "react-native";
import bitcoin from "../../assets/bitcoin.png";
import { textStyles } from "../styles/text";

export default function CryptoCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={bitcoin} />
        <Text style={textStyles.body}>Bitcoin (BTC)</Text>
        <Text style={textStyles.body}> R$ 110.091,72</Text>
        <Text style={textStyles.titleSM}>9.267%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    marginHorizontal: 24,
    height: 60,
    maxWidth: "90%",
    backgroundColor: "#232129",
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
