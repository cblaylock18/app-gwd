import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/COLORS';
import { QUESTION_INFO } from '../../constants/QUESTION_INFO';

const Question = ({ question, category }) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category}</Text>  {/* changed */}
        </View>
        <View style={styles.difficultyContainer}>
          <Text style={styles.difficultyText}>{`Question ${question.difficulty} of 3: ${QUESTION_INFO.DIFFICULTY[question.difficulty]}`}</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>{`${4 - question.difficulty} points`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>
    </View>
  )
}

export default Question;

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
  pointsContainer: {
    alignSelf: 'center',
  },
  pointsText: {
    fontWeight: 'bold',
    fontSize: 14
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
