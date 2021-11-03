import React from 'react'
import { StyleSheet, TextInput, SafeAreaView } from 'react-native'

const TextInputNumComponent = ({ SetValue }: { SetValue: any }) => {

return (
    <SafeAreaView style = {styles.TextInput}>
      <TextInput
        style={styles.TextInputText}
        onChangeText={(SetName) => SetValue(SetName)}
        placeholder="22"

        keyboardType="numeric"
        textAlign="center"
        textAlignVertical ="center"
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
    textAlignVertical:'center',
    
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

export default TextInputNumComponent;