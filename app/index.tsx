import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#852121", "#4E0C0C", "#380303"]}
      start={{ x: 0.5, y: 0.35 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <View style={[styles.container, { paddingHorizontal: 16 }]}>
        <Text style={styles.title}>Choose Your Role</Text>
        <TouchableOpacity
          style={[styles.card, styles.promoterCard]}
          onPress={() => router.push("/settings-promoter")}
        >
          <Text style={styles.cardTitle}>Promoter Screen</Text>
          <Text style={styles.cardDesc}>
            Access promoter settings and features
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.donorCard]}
          onPress={() => router.push("/settings-donor")}
        >
          <Text style={styles.cardTitle}>Donor Screen</Text>
          <Text style={styles.cardDesc}>
            Access donor settings and features
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
    fontFamily: "Poppins_700Bold",
    letterSpacing: 1,
  },
  card: {
    width: 320,
    borderRadius: 18,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
  promoterCard: {
    backgroundColor: "#B71C1C",
  },
  donorCard: {
    backgroundColor: "#cf0cae",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    marginBottom: 8,
  },
  cardDesc: {
    color: "#fff8",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Poppins_700Bold",
  },
});
