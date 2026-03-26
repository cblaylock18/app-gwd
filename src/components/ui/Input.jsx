import { View, Text, TextInput } from 'react-native'

const Input = ({ title, placeholder, onChange, value, ...props }) => {
  return (
    <View>
      {title && <Text>{title}</Text>}
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