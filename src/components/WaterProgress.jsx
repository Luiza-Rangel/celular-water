import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";




export function WaterProgress({ consumed, goal }) {

  const porcentagem = Math.min(Math.round((consumed / goal) * 100), 100)

  return (
    <View style={styles.card}>
      <Text style={styles.consumedText}>Você bebeu {consumed}ml de água hoje.</Text>
      <Text style={styles.percentageText}>Você atingiu {porcentagem}% da meta diária.</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${porcentagem}%` }]} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  consumedText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});