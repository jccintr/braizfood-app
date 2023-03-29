import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardLoja from './CardLoja'

const Lojas = ({lojas}) => {
  return (
    <View style={styles.container}>
        {lojas.map((loja)=>(
            
          <CardLoja key={loja.id} loja={loja}/>
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