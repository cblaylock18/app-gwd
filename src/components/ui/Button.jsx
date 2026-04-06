import { Text, Pressable, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/COLORS';

const Button = ({ title, onPress, disabled }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primaryOrange,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
})  