import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/COLORS';

const Input = ({ placeholder, onChange, value, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: COLORS.lightGrey
  }
})