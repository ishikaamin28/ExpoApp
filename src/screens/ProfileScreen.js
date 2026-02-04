import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { getMyIP } from "../api/ipifyApi";

export default function ProfileScreen({ navigation }) {
  const dummyUser = {
    name: "Ishika Amin",
    email: "ishikaamin28@gmail.com",
    phone: "8073206598",
    role: "Student",
  };

  const [ip, setIp] = useState("");
  const [loadingIp, setLoadingIp] = useState(true);
  const [errorIp, setErrorIp] = useState("");

  async function loadIP() {
    try {
      setErrorIp("");
      setLoadingIp(true);
      const data = await getMyIP(); // axios call
      setIp(data?.ip || "");
    } catch (e) {
      setErrorIp("Failed to load IP. Check internet.");
    } finally {
      setLoadingIp(false);
    }
  }

  useEffect(() => {
    loadIP();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header row */}
        <View style={styles.topRow}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {dummyUser.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.name}>{dummyUser.name}</Text>
          <Text style={styles.role}>{dummyUser.role}</Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{dummyUser.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Mobile</Text>
            <Text style={styles.value}>{dummyUser.phone}</Text>
          </View>

          {/* API Section */}
          <View style={styles.apiBox}>
            <View style={styles.apiTopRow}>
              <Text style={styles.apiTitle}>Your Public IP </Text>
              <Pressable onPress={loadIP} style={styles.refreshBtn}>
                <Text style={styles.refreshText}>Refresh</Text>
              </Pressable>
            </View>

            {loadingIp ? (
              <ActivityIndicator />
            ) : errorIp ? (
              <Text style={styles.errorText}>{errorIp}</Text>
            ) : (
              <Text style={styles.ipText}>{ip || "Not found"}</Text>
            )}
          </View>
        </View>

        {/* Buttons */}
        <Pressable style={styles.primaryBtn} onPress={() => {}}>
          <Text style={styles.primaryText}>Edit</Text>
        </Pressable>

        <Pressable style={styles.secondaryBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.secondaryText}>Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f4f6ff" },
  container: { flex: 1, padding: 18 },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    marginBottom: 16,
  },
  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eee",
  },
  backText: { color: "#2f66ff", fontWeight: "700" },
  headerTitle: { fontSize: 20, fontWeight: "800", color: "#111" },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#2f66ff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  avatarText: { color: "#fff", fontSize: 22, fontWeight: "900" },

  name: { textAlign: "center", fontSize: 20, fontWeight: "800", color: "#111" },
  role: { textAlign: "center", marginTop: 4, color: "#666", fontSize: 13 },

  divider: { height: 1, backgroundColor: "#eee", marginVertical: 16 },

  row: { marginBottom: 12 },
  label: { fontSize: 12, color: "#777" },
  value: { marginTop: 4, fontSize: 15, fontWeight: "700", color: "#111" },

  apiBox: {
    marginTop: 6,
    backgroundColor: "#f7f8ff",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e7ebff",
  },
  apiTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  apiTitle: { fontWeight: "800", color: "#111", fontSize: 13 },

  refreshBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe6ff",
  },
  refreshText: { color: "#2f66ff", fontWeight: "700", fontSize: 12 },

  ipText: { fontSize: 14, fontWeight: "800", color: "#2f66ff" },
  errorText: { color: "#c62828", fontWeight: "700" },

  primaryBtn: {
    marginTop: 16,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#2f66ff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  secondaryBtn: {
    marginTop: 12,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: { color: "#2f66ff", fontSize: 16, fontWeight: "700" },
});
