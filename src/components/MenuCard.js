import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function MenuCard({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 12,
  },
  text: { fontSize: 16, fontWeight: "600", color: "#111" },
});
