import { View, Text, StyleSheet, Pressable } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/(auth)");
  };
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#cbd5f5",
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#022c22",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ef4444",
    alignItems: "center",
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "600",
  },
});


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🎟️ Ticket App</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Dashboard</Text>
        <Text style={styles.cardText}>
          You are successfully logged in.  
          Book tickets, view events, and manage your bookings easily.
        </Text>
      </View>

      {/* Buttons */}
      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>🎫 View Events</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}
