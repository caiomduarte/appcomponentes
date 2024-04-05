import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImagemPersonalizada from './components/ImagemPersonalizada';

export default function App() {

  let nome = 'Prof° Mário';  
  let img = 'https://sujeitoprogramador.com/steve.png';

  return (
    <View style={styles.container}>
      <Text
        style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Programador</Text>
     
        <ImagemPersonalizada
          largura = {200}
          altura  = {200}
          pessoa  = {'Caio'}
          tamanhoFonte = {45}
          foto = {'https://sujeitoprogramador.com/steve.png'}
        />

      <StatusBar style="auto" />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
