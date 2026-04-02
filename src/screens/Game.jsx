import { useState, useLayoutEffect, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useNavigation, useRoute } from '@react-navigation/native';
import Question from '../components/Question'
import RoundSummary from '../components/RoundSummary';
import EndScreen from '../components/EndScreen';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { fetchGameData } from '../services/async';
import { COLORS } from '../../constants/COLORS';

// get today's date in YYYY-MM-DD format for maxDate of calendar
const d = new Date();
const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const Game = () => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [value, setValue] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [roundResult, setRoundResult] = useState(null); // { roundIndex, won, pointsEarned }
  const [showEndScreen, setShowEndScreen] = useState(false);

  // grab the date param if coming from history, otherwise default to today's game data
  const route = useRoute();

  const date = route.params?.date ?? today; // falls back to today's data

  useEffect(() => {
    const loadGame = async () => {
      try {
        const gameData = await fetchGameData(date);
        console.log("Fetched game data:", gameData, date);
        setGameData(gameData);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
        setError(true)
      }
    }
    loadGame();
  }, [date]);

  // Set up header with round and date info
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackVisible: false,
      gestureEnabled: false,
      headerLeft: () => (
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white, paddingLeft: 10 }}>
          Round {currentRoundIndex + 1} of 5
        </Text>
      ),
      headerRight: () => (
        <Text style={{ fontSize: 12, color: COLORS.white, paddingRight: 10 }}>
          {date}
        </Text>
      ),
    });
  }, [navigation, currentRoundIndex, date]);

  const renderNextRoundScreen = () => {
    const { roundIndex, won, pointsEarned } = roundResult;
    return (
      <RoundSummary
        round={gameData?.[roundIndex]}
        won={won}
        pointsEarned={pointsEarned}
        totalPoints={totalPoints}
        nextButton={<Button title="Next Round" onPress={handleNextRound} />}
      />
    );
  }

  const renderEndScreen = () => {
    const { roundIndex, won, pointsEarned } = roundResult;
    return (
      <EndScreen
        round={gameData?.[roundIndex]}
        won={won}
        pointsEarned={pointsEarned}
        totalPoints={totalPoints}
      />
    );
  }

  const handleSubmit = () => {
    const answerIsRight = value.trim().toLowerCase() === currentRound.answer.toLowerCase();
    const pointsEarned = answerIsRight ? 4 - currentQuestion.difficulty : 0;

    if (answerIsRight) {
      // if answer is right, add points and move to next round (or end screen if it was the last round)
      setTotalPoints((prev) => prev + pointsEarned);
      if (currentRoundIndex < (gameData?.length) - 1) {
        setRoundResult({ roundIndex: currentRoundIndex, won: true, pointsEarned });
      } else {
        setRoundResult({ roundIndex: currentRoundIndex, won: true, pointsEarned });
        setShowEndScreen(true);
      }
    }
    // answer was wrong
    else {
      // if there are more questions in the round, move to the next question
      if (currentQuestionIndex < (currentRound.questions.length) - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // if there are no more questions, move to the next round (or end screen if it was the last round)
        if (currentRoundIndex < (gameData?.length) - 1) {
          setRoundResult({ roundIndex: currentRoundIndex, won: false, pointsEarned: 0 });
        } else {
          setRoundResult({ roundIndex: currentRoundIndex, won: false, pointsEarned: 0 });
          setShowEndScreen(true);
        }
      }
    }

    // reset input for next question or round
    setValue("");
  }

  const handleNextRound = () => {
    setRoundResult(null);
    setCurrentRoundIndex((prev) => prev + 1);
    setCurrentQuestionIndex(0);
    setValue("");
  }

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, color: COLORS.grey }}>Loading game...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, color: COLORS.grey }}>Error loading game data.</Text>
      </View>
    );
  }

  // grab current round and question based on state
  const currentRound = gameData?.[currentRoundIndex];
  const currentQuestion = currentRound.questions[currentQuestionIndex];

  if (showEndScreen) {
    return (
      <ScrollView style={styles.container}>
        {renderEndScreen()}
      </ScrollView>
    );
  }

  if (roundResult) {
    return (
      <ScrollView style={styles.container}>
        {renderNextRoundScreen()}
      </ScrollView>
    );
  }

  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps='handled' bottomOffset={100}>
      <Question question={currentQuestion} category={currentRound.category} />
      <Input placeholder="Enter your answer here" value={value} onChange={setValue} />
      <Button title={value.length === 0 ? "Skip" : "Submit"} onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  )
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.mainBackground
  },
})