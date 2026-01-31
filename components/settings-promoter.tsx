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

export default function SettingsPromoter() {
  const router = useRouter();
  const [mentions, setMentions] = useState(true);
  const [seminar, setSeminar] = useState(false);
  const [activationCode, setActivationCode] = useState("");

  return (
    <LinearGradient
      colors={["#6E1919", "#5F1010", "#430303"]}
      start={{ x: 0.5, y: 0.19 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Icon name="arrow-left" size={24} color="#fff" />
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
            onPress={() => router.push("/edit-profile-promoter")}
          />
          <SettingsItem
            icon="email-outline"
            label="Email & Phone"
            onPress={() => router.push("/email-change")}
          />
          <SettingsItem
            icon="lock-outline"
            label="Change Password"
            onPress={() => router.push("/change-password")}
          />
          <SettingsItem
            icon="link-variant"
            label="Linked Accounts"
            onPress={() => router.push("/linked-accounts")}
          />
          <SettingsItem
            icon="delete-outline"
            label="Deactivate / Delete Account"
            onPress={() => router.push("/delete-account")}
            disabled
          />
        </Section>
        {/* Privacy Section */}
        <Section title="Privacy">
          <SettingsItem
            icon="block-helper"
            label="Blocked Users"
            onPress={() => router.push("/blocked-accounts")}
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
          <SettingsSwitch
            icon="calendar-check-outline"
            label="Seminar Invites"
            value={seminar}
            onValueChange={setSeminar}
          />
        </Section>
        {/* Code Section */}
        <Section title="Code">
          <View style={styles.codeRow}>
            <Icon
              name="key-outline"
              size={22}
              color="#fff"
              style={{ marginRight: 12 }}
            />
            <TextInput
              placeholder="Activation Code"
              placeholderTextColor="#fff8"
              style={styles.codeInput}
              value={activationCode}
              onChangeText={setActivationCode}
            />
            <TouchableOpacity style={styles.confirmBtn}>
              <Text style={styles.confirmBtnText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Section>
        {/* Support & Legal Section */}
        <Section title="Support & Legal">
          <SettingsItem icon="help-circle-outline" label="Help Center" />
          <SettingsItem icon="alert-circle-outline" label="Report a Problem" />
          <SettingsItem icon="shield-lock-outline" label="Privacy Policy" />
          <SettingsItem icon="file-document-outline" label="Terms of Service" />
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
  disabled,
}: {
  icon: string;
  label: string;
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.itemRow, disabled && styles.disabledItem]}
      disabled={disabled}
      onPress={onPress}
    >
      <Icon
        name={icon}
        size={22}
        color={disabled ? "#fff5" : "#fff"}
        style={{ marginRight: 16 }}
      />
      <Text style={[styles.itemLabel, disabled && styles.disabledText]}>
        {label}
      </Text>
      {!disabled && (
        <Icon
          name="chevron-right"
          size={22}
          color="#fff"
          style={{ marginLeft: "auto" }}
        />
      )}
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
        trackColor={{ false: "#222", true: "#FF0000" }}
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

    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
  },
  disabledItem: {
    opacity: 0.5,
  },
  disabledText: {
    color: "#fff5",
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

    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 8,
  },
  confirmBtn: {
    backgroundColor: "#FF0000",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  confirmBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  version: {
    color: "#fff8",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
  },
  logoutBtn: {
    backgroundColor: "#FF0000",
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 0,
    marginBottom: 24,
  },
  logoutBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
