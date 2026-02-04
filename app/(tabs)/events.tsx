import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const EVENTS = [
  { id: "1", title: "Rock Concert", date: "25 Feb" },
  { id: "2", title: "Movie Night", date: "28 Feb" },
  { id: "3", title: "Comedy Show", date: "3 Mar" },
];

export default function Events() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎫 Events</Text>

      <FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", padding: 16 ,marginTop:50},
  heading: { color: "#fff", fontSize: 24, marginBottom: 16 },
  card: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { color: "#fff", fontSize: 18 },
  date: { color: "#94a3b8", marginTop: 4 },
});
