import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
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
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF",
  },
});
export default styles;