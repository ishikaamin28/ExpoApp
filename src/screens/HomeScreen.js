import React from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";

export default function HomeScreen({ navigation }) {
  const userName = "Ishika"; // dummy data

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.headerBox}>
          <Text style={styles.appName}>MyApp</Text>
          <Text style={styles.welcome}>Hi, {userName} 👋</Text>
          
        </View>

        {/* Menu Cards */}
        <View style={styles.grid}>
          <Pressable style={styles.card} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.cardTitle}>Profile</Text>
            <Text style={styles.cardSub}>View your details</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => {}}>
            <Text style={styles.cardTitle}>Settings</Text>
            
          </Pressable>

          <Pressable style={styles.card} onPress={() => {}}>
            <Text style={styles.cardTitle}>About</Text>
            
          </Pressable>

          <Pressable style={[styles.card, styles.logoutCard]} onPress={() => navigation.replace("Login")}>
            <Text style={[styles.cardTitle, styles.logoutText]}>Logout</Text>
            <Text style={[styles.cardSub, styles.logoutText]}>Back to Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f4f6ff",
  },
  container: {
    flex: 1,
    padding: 18,
  },

  headerBox: {
    backgroundColor: "#2f66ff",
    borderRadius: 22,
    padding: 18,
    marginTop: 8,
    marginBottom: 18,
  },
  appName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
  },
  welcome: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  sub: {
    marginTop: 4,
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  cardSub: {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
  },

  logoutCard: {
    borderColor: "#ffd6d6",
    backgroundColor: "#fff5f5",
  },
  logoutText: {
    color: "#c62828",
  },
});
