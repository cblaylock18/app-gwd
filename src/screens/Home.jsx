import { ScrollView, StyleSheet } from 'react-native'
import { Question } from '../components/Question'
import DATA from '../example/data.json'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {DATA.map(data => <Question key={data.question} question={data} />)}
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
})