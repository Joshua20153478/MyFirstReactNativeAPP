import React from 'react'
import { StyleSheet, TextInput, SafeAreaView } from 'react-native'

const TextInputComponent = () => {
    const [text, onChangeText] = React.useState("");

return (
    <SafeAreaView style = {styles.TextInput}>
      <TextInput
        style={styles.TextInputText}
        onChangeText={onChangeText}
        value={text}
        placeholder="Joshua"
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
TextInputText:{
    color:'#000',
    fontSize:18,
    fontWeight: 'bold',
    textAlign:'center',
    maxLength: 10,
    textAlignVertical:'center',
    textShawColor: '#FF0000',

},

TextInput:{
    alignItems: 'center',
    display: 'flex',
    width: 170,
    backgroundColor: '#23AAA4',
    borderRadius: 50,
    borderWidth: 1,
},
})

export default TextInputComponent;