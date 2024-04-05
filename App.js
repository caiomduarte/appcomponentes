import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
  let nome = 'Prof° Mário';

  
  let img = 'https://sujeitoprogramador.com/steve.png';
  return (
    <View style={styles.container}>
      <Text
        style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Programador</Text>
      <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ fontSize: 30 }}> {nome} </Text>
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
