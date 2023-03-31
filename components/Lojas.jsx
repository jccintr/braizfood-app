import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardLoja from './CardLoja'
import { useNavigation } from '@react-navigation/native';

const Lojas = ({lojas}) => {
  const navigation = useNavigation();



const onLojaPress = (loja) => {
  navigation.navigate('Loja',{loja: loja})
}

  return (
    <View style={styles.container}>
        {lojas.map((loja)=>(
          <TouchableOpacity key={loja.id} onPress={()=>onLojaPress(loja)}>
             <CardLoja key={loja.id} loja={loja}/>
          </TouchableOpacity>
        ))}
     
    </View>
  )
}

export default Lojas

const styles = StyleSheet.create({
   container: {
      marginBottom: 5,
      
      width: '90%',
   }

})