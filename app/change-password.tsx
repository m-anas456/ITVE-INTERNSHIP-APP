import { Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ChangePasswordScreen() {
  const [fontsLoaded] = useFonts({ Poppins_700Bold });
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={["#852121", "#4E0C0C", "#380303"]}
      start={{ x: 0.5, y: 0.35 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <Icon name="arrow-left" size={24} color="#fff" />
            <Text style={styles.headerTitle}>Change password</Text>
          </View>

          {/* Input Fields */}
          <TextInput
            style={styles.inputBox}
            placeholder="Current password"
            placeholderTextColor="#fff8"
            value={current}
            onChangeText={setCurrent}
            secureTextEntry
          />
          <TextInput
            style={styles.inputBox}
            placeholder="New password"
            placeholderTextColor="#fff8"
            value={newPass}
            onChangeText={setNewPass}
            secureTextEntry
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm new password"
            placeholderTextColor="#fff8"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
          />

          {/* Change Password Button */}
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmBtnText}>Change Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: 358,
    height: 23,
    marginTop: 32,
    marginBottom: 24,
    marginLeft: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    fontWeight: "700",
    marginLeft: 12,
  },
  inputBox: {
    width: 358,
    height: 53,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF0000",
    padding: 15,
    marginLeft: 14,
    marginBottom: 16,
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    backgroundColor: "transparent",
  },
  confirmBtn: {
    width: 358,
    height: 48,
    backgroundColor: "#FF0000",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8,
  },
  confirmBtnText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    fontWeight: "700",
  },
});
