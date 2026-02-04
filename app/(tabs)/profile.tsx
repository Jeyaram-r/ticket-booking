import { View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.clear();
    router.replace("/(auth)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>

      <Pressable
        onPress={logout}
        style={{ backgroundColor: "red", padding: 10 }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </Pressable>
    </View>
  );
}
