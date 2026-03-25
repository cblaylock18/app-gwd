import { Text, View } from 'react-native'

export const Question = ({ question }) => {
  return (
    <View>
      <Text>{question.date}</Text>
      <Text>{question.category}</Text>
      <Text>{question.difficulty}</Text>
      <Text>{question.question}</Text>
    </View>
  )
}