import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/COLORS';

const RoundSummary = ({ round, won, pointsEarned, totalPoints, nextButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.categoryText}>{round.category}</Text>
        <Text style={styles.resultText}>{won ? '🎉 Good job!' : 'Better luck next time!'}</Text>
        <Text style={styles.answerText}>The answer was: </Text>
        <Text style={styles.answerBold}>{round.answer}</Text>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsEarned}>{won ? `+${pointsEarned} points this round` : 'No points this round'}</Text>
        <Text style={styles.totalPoints}>{`Total: ${totalPoints} pts`}</Text>
      </View>

      {nextButton}

      <View style={styles.questionsContainer}>
        <Text style={styles.questionsLabel}>All clues</Text>
        {round.questions.map((question, index) => (
          <Text key={index} style={styles.questionText}>
            <Text style={styles.questionNumber}>{`${index + 1}. `}</Text>
            <Text>{question.question}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
};

export default RoundSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 6,
  },
  resultText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.grey,
    textDecorationLine: 'underline'
  },
  answerText: {
    fontSize: 16,
    marginTop: 4,
  },
  answerBold: {
    fontWeight: 'bold',
  },
  pointsContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryYellow,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 4,
  },
  pointsEarned: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.grey,
  },
  totalPoints: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  questionsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionsContainer: {
    gap: 6,
  },
  questionText: {
    fontSize: 10,
  }, questionNumber: {
    fontWeight: 'bold',
  }
});