import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

const BASE_URL = "http://192.168.29.86:5000/api/auth";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Enter a valid email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Alert.alert("Login Failed", data.message);
        return;
      }

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      router.replace("/(tabs)/home/home");
    } catch (error) {
      Alert.alert("Error", "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={"padding"}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
    <View style={styles.container}>
      <Text style={styles.title}>🎟 Ticket Booking</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {loading ? "Logging in..." : "Login"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)/Register")}>
        <Text style={styles.link}>Create new account</Text>
      </Pressable>
       </View>
      </ScrollView>
      </KeyboardAvoidingView>
   
    
  );
}

