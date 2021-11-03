import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button, Alert} from 'react-native';
import TextInputComponent from './SRC/Components/TextInput/TextInput';
import TextInputNumComponent from './SRC/Components/TextInput/TextInputNum';
import TextOutputComponent from './SRC/Components/View/ViewOutput';

const App = () => {

  return (
    <View style={styles.background}>
    <View style={styles.ImagenContainer}><Image style={styles.Imagen} source={require('./SRC/assets/img/suerte.jpg')} /></View>
    <View style={styles.animo}>
      <Text style={styles.animoText} >!Esperemos que este trebol te de suerte¡</Text>
    </View>
    <View style ={styles.container }>
    <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Age</Text>
    </View>
    <View>
    <View style={styles.container}>
    <TextInputComponent></TextInputComponent>
    <TextInputNumComponent></TextInputNumComponent>
    </View>
    </View>
    <View>
      <TextOutputComponent></TextOutputComponent>
    </View>
    <View style={styles.ButtonComponent}
    >
    <Button
      title="Obtener tu Numero!!!"
      color='#0E0052'
      onPress={() => Alert.alert('Simple Button pressed')}
    />
    </View>
    
    </View>
    
  );
};

const styles = StyleSheet.create({
ButtonComponent:{
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  marginTop:  15,
  width: '100%',
  borderRadius: 50,
},
background:{
  backgroundColor: '#0F4A48',
  height: '100%',
},

animo:{
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
},

animoText:{
  color:'#FF8A65',
  fontSize:16,
  fontWeight: 'bold',
  textAlign:'center',
  width:'80%',
  height:60,
  marginTop:15,
  padding:10,
  backgroundColor: '#001C83',
  borderRadius: 15,
  borderWidth: 1,
  textAlignVertical:'center',
},

ImagenContainer:{
  marginTop:15,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  
},
Imagen:{
  borderRadius: 500,
},

container:{
alignItems: 'center',
display: 'flex',
flexDirection:'row',
justifyContent: 'space-around',
marginTop: 20,

},
text:{
  color:'#000',
  fontSize:18,
  fontWeight: 'bold',
  textAlign:'center',
  width:170,
  height:60,
  padding:10,
  backgroundColor: '#197A76',
  borderRadius: 15,
  borderWidth: 1,
  textAlignVertical:'center',
},

});

export default App;
