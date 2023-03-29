import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Api from '../Api';
import {cores} from '../style/globalStyle';
import { AntDesign,FontAwesome,Entypo } from '@expo/vector-icons';


const Fechado = () => {

  return (
    <View style={styles.closedContainer}>
      <Text style={styles.closedText}>Fechado</Text>
    </View>
    
  )
}

const CardLoja = ({loja}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={{uri:`${Api.base_storage}/${loja.logotipo}`,}}/>
        <View style={styles.detalhes}>
            <Text style={styles.lojaNome}>{loja.nome}</Text>
            <View style={styles.middleLine}>
                <FontAwesome name="star" size={16} color={cores.dourado} />
                <Text style={styles.starText}>{loja.stars.length === 1 ? loja.stars+'.0': loja.stars}</Text>
                <Entypo name="dot-single" size={14} color="black" />
                <Text style={styles.lojaRamoAtividade}>{loja.ramo_atividade}</Text>
            </View>
            {loja.aberto?<Text style={styles.lojaTempo}><AntDesign name="clockcircleo" size={14} color="black" /> {loja.tempo}</Text>:<Fechado />}
        </View>
    </View>
  )
}

export default CardLoja

const styles = StyleSheet.create({

    container: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 90,
      borderBottomWidth: 1,
      borderBottomColor: '#ede7d9',
    },
    logo:{
       height: 80,
       width: 80,
       borderRadius: 10,
       marginRight: 5,
    },
    detalhes:{
      flex:1,
       justifyContent:'space-evenly',
       height: 80,
    },
    lojaNome:{
      fontWeight: 'bold',
      fontSize: 16, 
    },
    middleLine:{
      flexDirection: 'row',
      alignItems: 'center',

    },
    lojaRamoAtividade:{
      fontSize: 14,
    },
    lojaTempo:{
      fontSize: 14,
    },
    starText:{
      color: cores.dourado,
      
    },
    closedContainer:{
      
      borderColor: cores.vermelho,
      borderWidth:1,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:5,
     
    },
    closedText:{
      color: cores.vermelho,
    },
    
})