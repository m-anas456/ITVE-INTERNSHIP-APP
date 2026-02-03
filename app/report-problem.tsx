import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ReportProblemScreen() {
  const router = useRouter();
  const [problemDescription, setProblemDescription] = useState("");

  return (
    <LinearGradient
      colors={["#2C2C2E", "#1C1C1E", "#000000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { paddingHorizontal: 16 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Report a problem</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Describe the problem you&apos;re experiencing. We&apos;ll use this
          information to investigate and resolve the issue.
        </Text>

        {/* Problem Description Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder=""
            placeholderTextColor="#8E8E93"
            value={problemDescription}
            onChangeText={setProblemDescription}
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        {/* Attach Files Section */}
        <View style={styles.attachSection}>
          <Text style={styles.attachTitle}>Attach files</Text>
          <View style={styles.uploadContainer}>
            <Text style={styles.uploadTitle}>Tap to upload</Text>
            <Text style={styles.uploadDescription}>
              Attach screenshots or other files that can help us understand the
              problem better.
            </Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Report Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    paddingBottom: 32,
    minHeight: "100%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 16,
  },
  description: {
    color: "#AEAEB2",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    marginBottom: 24,
  },
  inputContainer: {
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
    minHeight: 150,
  },
  textInput: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
    flex: 1,
  },
  attachSection: {
    marginBottom: 32,
  },
  attachTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  uploadContainer: {
    borderWidth: 2,
    borderColor: "#3A3A3C",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  uploadTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },
  uploadDescription: {
    color: "#AEAEB2",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  uploadButton: {
    backgroundColor: "#3A3A3C",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#3A3A3C",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: "auto",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
