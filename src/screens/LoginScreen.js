import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* App Name */}
        <Text style={styles.appName}>MyApp</Text>
        <Text style={styles.subtitle}>Welcome back 👋</Text>

        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email / Mobile"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => navigation.replace("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>
              Don’t have an account? <Text style={styles.linkBold}>Register</Text>
            </Text>
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
    justifyContent: "center",
    padding: 20,
  },

  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2f66ff",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 4,          // Android shadow
    shadowColor: "#000",   // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },

  forgot: {
    textAlign: "right",
    color: "#2f66ff",
    marginBottom: 16,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#2f66ff",
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    textAlign: "center",
    marginTop: 18,
    color: "#555",
  },

  linkBold: {
    color: "#2f66ff",
    fontWeight: "600",
  },
});
