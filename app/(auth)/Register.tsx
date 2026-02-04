import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const BASE_URL = "http://192.168.29.86:5000/api/auth";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields required");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Alert.alert("Error", data.message);
        return;
      }

      Alert.alert("Success", "Account created successfully");
      router.replace("/(auth)");
    } catch (error) {
      Alert.alert("Error", "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          {loading ? "Creating..." : "Register"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.link}>Back to Login</Text>
      </Pressable>
      </View>
       </ScrollView>
  </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF",
  },
});
