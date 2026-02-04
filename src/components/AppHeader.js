import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AppHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 18 },
  title: { fontSize: 26, fontWeight: "700", color: "#111" },
  sub: { marginTop: 6, fontSize: 14, color: "#666" },
});
