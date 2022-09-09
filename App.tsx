import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CryptoCard from "./src/components/CryptoCard";
import { textStyles } from "./src/styles/text";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.viewHold}>
        <View style={styles.titles}>
          <Text style={textStyles.body}>Moeda</Text>
          <Text style={textStyles.body}>Cotação</Text>
          <Text style={textStyles.body}>24H</Text>
        </View>
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312E38",
  },
  viewHold: {
    marginTop: 64,
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#F4EDE8",
    marginVertical: 0,
    marginHorizontal: 24,
  },
});
