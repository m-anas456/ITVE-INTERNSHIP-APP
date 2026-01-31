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

export default function DeleteAccountScreen() {
  const [fontsLoaded] = useFonts({ Poppins_700Bold });
  const [selected, setSelected] = useState("deactivate");
  const [reason, setReason] = useState("");

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
            <Text style={styles.headerTitle}>Delete or deactivate account</Text>
          </View>

          <Text style={styles.chooseOption}>Choose an option</Text>

          {/* Deactivate Account Box */}
          <TouchableOpacity
            style={[
              styles.optionBox,
              selected === "deactivate" && styles.optionBoxSelected,
            ]}
            onPress={() => setSelected("deactivate")}
            activeOpacity={0.8}
          >
            <View style={styles.radioRow}>
              <View style={styles.radioOuter}>
                {selected === "deactivate" && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text style={styles.optionTitle}>Deactivate account</Text>
            </View>
            <Text style={styles.optionDesc}>
              This will temporarily disable your account. You can reactivate it
              anytime by logging back in.
            </Text>
          </TouchableOpacity>

          {/* Delete Account Box */}
          <TouchableOpacity
            style={[
              styles.optionBox,
              selected === "delete" && styles.optionBoxSelected,
            ]}
            onPress={() => setSelected("delete")}
            activeOpacity={0.8}
          >
            <View style={styles.radioRow}>
              <View style={styles.radioOuter}>
                {selected === "delete" && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.optionTitle}>Delete account</Text>
            </View>
            <Text style={styles.optionDesc}>
              This will permanently remove your account and all associated data.
              This action cannot be undone.
            </Text>
          </TouchableOpacity>

          {/* Reason Box */}
          <View style={styles.reasonBox}>
            <TextInput
              style={styles.reasonInput}
              placeholder="Reasons for Deactivate/Delete Account"
              placeholderTextColor="#fff8"
              value={reason}
              onChangeText={setReason}
              multiline
            />
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmBtnText}>Confirm</Text>
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
  chooseOption: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: 14,
    marginBottom: 12,
  },
  optionBox: {
    width: 358,
    height: 116,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF0000",
    padding: 15,
    marginLeft: 14,
    marginBottom: 16,
    backgroundColor: "transparent",
    gap: 16,
    justifyContent: "center", // Center content vertically
  },
  optionBoxSelected: {
    backgroundColor: "rgba(255,0,0,0.08)",
    borderColor: "#FF0000",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    // Remove marginLeft from optionDesc, align text left
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF0000",
  },
  optionTitle: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 4,
  },
  optionDesc: {
    color: "#fff8",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
    fontWeight: "400",
    marginLeft: 0, // Remove left margin
    marginTop: 0, // Remove negative margin
    textAlign: "left",
  },
  reasonBox: {
    width: 358,
    height: 144,
    minHeight: 160,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF0000",
    marginLeft: 14,
    marginBottom: 32,
    backgroundColor: "transparent",
    padding: 15,
    justifyContent: "flex-start", // Align text at the top
  },
  reasonInput: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
    fontWeight: "400",
    flex: 1,
    textAlignVertical: "top",
    textAlign: "left",
    padding: 0,
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
