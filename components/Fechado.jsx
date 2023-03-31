import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cores } from '../style/globalStyle'


const Fechado = () => {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>FECHADO</Text>
      </View>
      
    )
  }

export default Fechado

const styles = StyleSheet.create({

    container:{
        marginTop: -30,
        width: 75,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor: cores.vermelho,
      },
      text:{
        color: cores.branco,
        fontWeight: 'bold',
      },
       

})