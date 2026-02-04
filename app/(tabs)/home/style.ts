import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f568c",
    alignItems: "center",
    paddingTop: 60,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 70,
  },
  titleLight: {
    color: "#8BD8BD",
  },
  titleDark: {
    color: "#1e3a8a",
  },

  menu: {
    alignItems: "center",
    gap: 28,
    marginBottom: 60,
  },

  iconCard: {
    width: 150,
    height: 84,
    backgroundColor: "#ffffff",
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  activeCard: {
    backgroundColor: "#6fd3b3",
  },

  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ef4444",
  },

  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
