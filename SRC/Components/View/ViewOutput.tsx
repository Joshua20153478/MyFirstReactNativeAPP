import React from 'react'
import { StyleSheet, TextInput, SafeAreaView } from 'react-native'

const TextOutputComponent = () => {
    const [text, onChangeText] = React.useState("");

return (
    <SafeAreaView style = {styles.Respuesta}>
      <TextInput
        style={styles.RespuestaText}
        onChangeText={onChangeText}
        value={text}
        placeholder="0"
        placeholderTextColor='#FFEB3B'
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    Respuesta:{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },

    RespuestaText:{
        color:'#FFEB3B',
        fontSize:18,
        fontWeight: 'bold',
        textAlign:'center',
        width:'60%',
        height:100,
        marginTop:15,
        padding:10,
        backgroundColor: '#00B67C',
        borderRadius: 15,
        borderWidth: 2,
        textAlignVertical:'center',
    },
})

export default TextOutputComponent;