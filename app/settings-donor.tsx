import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function SettingsDonor() {
  const router = useRouter();
  const [mentions, setMentions] = useState(true);

  return (
    <LinearGradient
      colors={["#4D1A94", "#31125D", "#241042"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { paddingHorizontal: 16 }]}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        {/* Search */}
        <View style={styles.searchBox}>
          <Icon
            name="magnify"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search settings"
            placeholderTextColor="#fff8"
            style={styles.searchInput}
          />
        </View>
        {/* Account Section */}
        <Section title="Account">
          <SettingsItem
            icon="account-outline"
            label="Edit Profile"
            onPress={() => router.push("/edit-profile-donor")}
          />
          <SettingsItem
            icon="email-outline"
            label="Email & Phone"
            onPress={() => router.push("/email-change-donor")}
          />
          <SettingsItem
            icon="lock-outline"
            label="Change Password"
            onPress={() => router.push("/change-password-donor")}
          />
          <SettingsItem
            icon="link-variant"
            label="Linked Accounts"
            onPress={() => router.push("/linked-account-donor")}
          />
          <SettingsItem
            icon="delete-outline"
            label="Deactivate / Delete Account"
            onPress={() => router.push("/delete-account-donor")}
          />
        </Section>
        {/* Privacy Section */}
        <Section title="Privacy">
          <SettingsItem
            icon="block-helper"
            label="Blocked Users"
            onPress={() => router.push("/blocked-accounts-donor")}
          />
          <SettingsItem
            icon="message-settings-outline"
            label="Message Settings"
            onPress={() => router.push("/message-setting-donor")}
          />
        </Section>
        {/* Notifications Section */}
        <Section title="Notifications">
          <SettingsSwitch
            icon="at"
            label="Mentions & Comments"
            value={mentions}
            onValueChange={setMentions}
          />
        </Section>
        {/* Support & Legal Section */}
        <Section title="Support & Legal">
          <SettingsItem
            icon="help-circle-outline"
            label="Help Center"
            onPress={() => router.push("/help-center")}
          />
          <SettingsItem
            icon="alert-circle-outline"
            label="Report a Problem"
            onPress={() => router.push("/report-problem")}
          />
          <SettingsItem
            icon="shield-lock-outline"
            label="Privacy Policy"
            onPress={() => router.push("/privacy-policy")}
          />
          <SettingsItem
            icon="file-document-outline"
            label="Terms of Service"
            onPress={() => router.push("/terms-of-service")}
          />
        </Section>
        {/* App Version */}
        <Text style={styles.version}>App Version: v1.0.0</Text>
        {/* Log Out Button */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.push("/")}
        >
          <Text style={styles.logoutBtnText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
}

function SettingsItem({
  icon,
  label,
  onPress,
  labelStyle,
}: {
  icon: string;
  label: string;
  onPress?: () => void;
  labelStyle?: any;
}) {
  return (
    <TouchableOpacity style={styles.itemRow} onPress={onPress}>
      <Icon name={icon} size={22} color="#fff" style={{ marginRight: 16 }} />
      <Text style={[styles.itemLabel, labelStyle]}>{label}</Text>
      <Icon
        name="chevron-right"
        size={22}
        color="#fff"
        style={{ marginLeft: "auto" }}
      />
    </TouchableOpacity>
  );
}

function SettingsSwitch({
  icon,
  label,
  value,
  onValueChange,
}: {
  icon: string;
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.itemRow}>
      <Icon name={icon} size={22} color="#fff" style={{ marginRight: 16 }} />
      <Text style={styles.itemLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#222", true: "#7C4DFF" }}
        thumbColor={value ? "#fff" : "#fff"}
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 32,
    minHeight: "100%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 16,
    fontFamily: "Poppins_700Bold",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff1",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 44,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    fontFamily: "Poppins_700Bold",
  },
  sectionCard: {
    backgroundColor: "#fff1",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 0,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#fff2",
  },
  itemLabel: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  codeInput: {
    flex: 1,
    backgroundColor: "#fff1",
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 8,
  },
  version: {
    color: "#fff8",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
    fontFamily: "Poppins_700Bold",
  },
  logoutBtn: {
    backgroundColor: "#fff1",
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 0,
    marginBottom: 24,
    alignItems: "center",
  },
  logoutBtnText: {
    color: "#FF4D4F",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
});
