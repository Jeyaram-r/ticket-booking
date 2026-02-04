import { View, Text, Pressable, } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import AeroplaneIcon from "../../../assets/images/icons/aeroplane";
import CarIcon from "../../../assets/images/icons/car";
import HotelIcon from "../../../assets/images/icons/hotel";
import { Button } from "@react-navigation/elements";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) router.replace("/(auth)");
    };
    checkToken();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        <Text style={styles.titleLight}>Book</Text>
        <Text style={styles.titleDark}>Now</Text>
      </Text>

      {/* Menu */}
      <View style={styles.menu}>
        <Pressable style={[styles.iconCard, styles.activeCard]}>
          <AeroplaneIcon width={28} height={28} />
          <Text>Aeroplane</Text>
        </Pressable>

        <View style={styles.iconCard}>
          <CarIcon width={28} height={28} />
          <Text>Car</Text>
        </View>

        <View style={styles.iconCard}>
          <HotelIcon width={28} height={28} />
          <Text>Hotel</Text>
        </View>
      </View>

      {/* Logout */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}
