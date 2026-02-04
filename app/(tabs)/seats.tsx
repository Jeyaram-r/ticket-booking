import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const seats = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Seats() {
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🪑 Select Seats</Text>

      <View style={styles.grid}>
        {seats.map((seat) => (
          <Pressable
            key={seat}
            style={[
              styles.seat,
              selected.includes(seat) && styles.selected,
            ]}
            onPress={() => toggleSeat(seat)}
          >
            <Text style={styles.seatText}>{seat}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.total}>
        Total: ₹{selected.length * 200}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", padding: 16,marginTop:50 },
  heading: { color: "#fff", fontSize: 24, marginBottom: 16 },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  seat: {
    width: "22%",
    margin: "1.5%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#334155",
    alignItems: "center",
  },
  selected: { backgroundColor: "#22c55e" },
  seatText: { color: "#fff" },
  total: { color: "#fff", marginTop: 20, fontSize: 18 },
});
