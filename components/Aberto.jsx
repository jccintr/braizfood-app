import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cores } from '../style/globalStyle'


const Aberto = () => {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>ABERTO</Text>
      </View>
      
    )
  }

export default Aberto

const styles = StyleSheet.create({

    container:{
        marginTop: -30,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor: cores.verde,
      },
      text:{
        color: cores.branco,
        fontWeight: 'bold',
      },
       

})