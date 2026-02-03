import { View, Text } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        router.replace("/(auth)");
      }
    };
    checkToken();
  }, []);

  return (
    <View>
      <Text>Welcome to Home Screen 🎟️</Text>
    </View>
  );
}
