import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { cores } from '../style/globalStyle';

const Rate = ({value}) => {
  return (
    <View style={styles.container}>
       <FontAwesome name="star" size={16} color={cores.branco} />
       <Text style={styles.text}>{String(value).length === 1 ? value+'.0': value}</Text>
    </View>
  )
}

export default Rate

const styles = StyleSheet.create({
    container:{
      
        marginTop: -30,
        width: 75,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor: cores.dourado,
      },
      text:{
        marginLeft: 5,
        color: cores.branco,
      },
})