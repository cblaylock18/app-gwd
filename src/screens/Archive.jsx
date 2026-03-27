import { View, Text, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/COLORS';

const Archive = () => {
  const navigation = useNavigation();

  // get today's date in YYYY-MM-DD format for maxDate of calendar
  const d = new Date();
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Calendar
        minDate='2023-12-04'
        maxDate={today}
        // when a date is pressed, navigate to the Game screen and pass the selected date as a param
        onDayPress={(day) => {
          navigation.navigate('Game', { date: day.dateString });
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Select a Date to Play That Day's Game</Text>
      </View>

    </View>
  )
}

export default Archive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.lightGrey
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10
  }
})