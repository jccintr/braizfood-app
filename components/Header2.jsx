import React from 'react'
import { StyleSheet,View,TouchableOpacity,Text } from 'react-native';
import { cores } from '../style/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header2 = ({loja}) => {
    const navigation = useNavigation();



  return (
    <View style={[styles.container]}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row',alignItems:'center'}}>   
            <AntDesign name="arrowleft" size={26} color="#fff" />
            <Text style={styles.title}>{loja.nome}</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default Header2

const styles = StyleSheet.create({
    container: {
      backgroundColor: cores.vermelho,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      width: '100%',
      flexDirection:'row',
      paddingLeft:10,
      paddingRight:5,
      
    },
    logo:{
        height: 25,
        width: 25,
    },
    title:{
      marginLeft: 10,  
      color: cores.branco,
      fontSize: 18,
      fontWeight: 'bold',

    },
    headerCityName:{
      paddingHorizontal: 5,
      fontSize:12,
      color: '#fff',
    }
  });
  