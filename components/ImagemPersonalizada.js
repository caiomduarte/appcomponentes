import { View, Image } from 'react-native';

export default function ImagemPersonalizada(props) {
 return (
   <View>
     <Image
        source={{ uri: props.foto }}
        style={{ width: props.largura, height: props.altura }}
      />
      <Text style={{ fontSize: props.tamanhoFonte }}> {props.pessoa} </Text>
   </View>
  );
}