import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef3ff",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2f66ff",
  },
  text: {
    marginVertical: 10,
    fontSize: 14,
  },
});
