import { View } from 'react-native'
import { Question } from '../components/Question'
import DATA from '../example/data.json'

const Home = () => {
  return (
    <View>
      <Question question={DATA[0]} />
    </View>
  )
}

export default Home