import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f66ff",
    marginTop: 8,
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
