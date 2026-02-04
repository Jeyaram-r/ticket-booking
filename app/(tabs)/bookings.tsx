import { View, Text, FlatList, StyleSheet } from "react-native";

const BOOKINGS = [
  { id: "1", event: "Rock Concert", seats: "A1,A2", amount: 400 },
  { id: "2", event: "Movie Night", seats: "B3", amount: 200 },
];

export default function Bookings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🧾 My Bookings</Text>

      <FlatList
        data={BOOKINGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.event}</Text>
            <Text style={styles.text}>Seats: {item.seats}</Text>
            <Text style={styles.text}>₹ {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", padding: 16,marginTop:50 },
  heading: { color: "#fff", fontSize: 24, marginBottom: 16 },
  card: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { color: "#fff", fontSize: 18 },
  text: { color: "#94a3b8", marginTop: 4 },
});
