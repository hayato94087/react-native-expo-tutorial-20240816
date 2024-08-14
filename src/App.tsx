import { type FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import "./styles/global.css";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container} className="text-bold">
        Open up App.tsx to start working on your app!
      </Text>
      <Text>aaa</Text>
      <Text className="text-bold text-red-500">aaa</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

registerRootComponent(App);
