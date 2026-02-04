import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { getRandomJoke } from "../api/jokeApi";

export default function HomeScreen({ navigation }) {
  const userName = "Ishika";

  const [joke, setJoke] = useState(null);
  const [loadingJoke, setLoadingJoke] = useState(true);
  const [errorJoke, setErrorJoke] = useState("");

  async function loadJoke() {
    try {
      setErrorJoke("");
      setLoadingJoke(true);
      const data = await getRandomJoke(); // axios call
      setJoke(data);
    } catch (e) {
      setErrorJoke("Failed to load joke. Check internet.");
    } finally {
      setLoadingJoke(false);
    }
  }

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerBox}>
          <Text style={styles.appName}>MyApp</Text>
          <Text style={styles.welcome}>Hi, {userName} 👋</Text>
          
        </View>

        {/* API Card - Joke */}
        <View style={styles.apiCard}>
          <View style={styles.apiTopRow}>
            <Text style={styles.apiTitle}>Daily Joke </Text>

            <Pressable onPress={loadJoke} style={styles.refreshBtn}>
              <Text style={styles.refreshText}>Refresh</Text>
            </Pressable>
          </View>

          {loadingJoke ? (
            <ActivityIndicator />
          ) : errorJoke ? (
            <Text style={styles.errorText}>{errorJoke}</Text>
          ) : (
            <>
              <Text style={styles.jokeSetup}>{joke?.setup}</Text>
              <Text style={styles.jokePunch}>{joke?.punchline}</Text>
            </>
          )}
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
  safe: { flex: 1, backgroundColor: "#f4f6ff" },
  container: { flex: 1, padding: 18 },

  headerBox: {
    backgroundColor: "#2f66ff",
    borderRadius: 22,
    padding: 18,
    marginTop: 8,
    marginBottom: 14,
  },
  appName: { fontSize: 24, fontWeight: "800", color: "#fff" },
  welcome: { marginTop: 8, fontSize: 18, fontWeight: "700", color: "#fff" },
  sub: { marginTop: 4, fontSize: 13, color: "rgba(255,255,255,0.85)" },

  apiCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 14,
  },
  apiTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  apiTitle: { fontSize: 14, fontWeight: "800", color: "#111" },

  refreshBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#f1f4ff",
    borderWidth: 1,
    borderColor: "#dfe6ff",
  },
  refreshText: { color: "#2f66ff", fontWeight: "700", fontSize: 12 },

  jokeSetup: { color: "#333", lineHeight: 20, fontWeight: "700" },
  jokePunch: { marginTop: 8, color: "#333", lineHeight: 20 },

  errorText: { color: "#c62828", fontWeight: "700" },

  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#111" },
  cardSub: { marginTop: 6, fontSize: 12, color: "#666" },

  logoutCard: { borderColor: "#ffd6d6", backgroundColor: "#fff5f5" },
  logoutText: { color: "#c62828" },
});
