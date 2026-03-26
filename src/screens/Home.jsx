import { useState, useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useNavigation } from '@react-navigation/native';
import Question from '../components/Question'
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import DATA from '../example/data.json'
import { COLORS } from '../../constants/COLORS';

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [value, setValue] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);

  const navigation = useNavigation();
  const currentRound = DATA[currentRoundIndex];
  const currentQuestion = currentRound.questions[currentQuestionIndex];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Play ${DATA[0].date}`,
    });
  }, [navigation]);

  const showNextRoundScreen = (roundIndex, won) => {
    // TO UPDATE
  }

  const showEndScreen = () => {
    // TO UPDATE
  }

  const handleSubmit = () => {
    const answerIsRight = value.trim().toLowerCase() === currentRound.answer.toLowerCase();

    if (answerIsRight) {
      setTotalPoints((prev) => prev + (4 - currentQuestion.difficulty));
      if (currentRoundIndex < DATA.length - 1) {
        setCurrentRoundIndex((prev) => prev + 1);
        setCurrentQuestionIndex(0);
        showNextRoundScreen(currentRoundIndex, true);
      } else {
        showEndScreen();
      }
    } else {
      if (currentQuestionIndex < currentRound.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        if (currentRoundIndex < DATA.length - 1) {
          setCurrentRoundIndex((prev) => prev + 1);
          setCurrentQuestionIndex(0);
        }
        showNextRoundScreen(currentRoundIndex, false);
      }
    }

    setValue("");
  }

  const renderButton = () => {
    const title = value.length === 0 ? "Skip" : "Submit";
    return (
      <Button title={title} onPress={handleSubmit} />
    )
  }

  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps='handled' bottomOffset={100}>
      <Question question={currentQuestion} category={currentRound.category} />
      <Input placeholder="Enter your answer here" value={value} onChange={setValue} />
      {renderButton()}
    </KeyboardAwareScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.mainBackground
  },
})