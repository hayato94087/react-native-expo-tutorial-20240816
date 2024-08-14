import { type FC } from "react";
import { Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import "./styles/global.css";

const App: FC = () => {
  return (
    <View className="flex flex-1 items-center justify-center bg-[#25292e]">
      <Text className="text-white">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

registerRootComponent(App);
