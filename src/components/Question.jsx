import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/COLORS';
import { QUESTION_INFO } from '../../constants/QUESTION_INFO';

export const Question = ({ question }) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{question.date}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{question.category}</Text>
        </View>
        <View style={styles.difficultyContainer}>
          <Text style={styles.difficultyText}>{`Question ${question.difficulty} of 3: ${QUESTION_INFO.DIFFICULTY[question.difficulty]}`}</Text>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    width: '100%',
    marginTop: 40
  },
  infoContainer: {
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dateContainer: {
    alignSelf: 'flex-start',
    marginBottom: 40
  },
  dateText: {
    fontWeight: "bold"
  },
  categoryContainer: {
    alignSelf: 'center',

  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  difficultyContainer: {
    alignSelf: 'center',

  },
  difficultyText: {
    fontStyle: 'italic',
  },
  questionContainer: {
    flexGrow: 1,
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 10
  },
});