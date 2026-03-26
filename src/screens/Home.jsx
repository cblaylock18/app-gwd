import { useState, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
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

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Play ${DATA[0].date}`, // TO UPDATE
    });
  }, [navigation]);

  const renderButton = () => {
    return (
      <Button title="Submit" onPress={() => setCurrentQuestionIndex((prev) => prev + 1)} />
    )
  }


  // what do i want this to do?
  // display the first question
  // display a text input
  // on submit, check if the answer matches
  // if yes, display all three questions and you got it right, and points, and next button
  // track total points
  // if no, display this question and the next question with a text input
  // continue until last question, then if wrong, display better luck and next button

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {<Question question={DATA[currentQuestionIndex]} />}
      <Input placeholder="Enter your answer here" />
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