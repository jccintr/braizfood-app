import React from 'react'
import { StyleSheet,View,Image,Text } from 'react-native';
import { cores } from '../style/globalStyle';
import logo from '../assets/logo-branco-250.png';
import { Ionicons } from '@expo/vector-icons';

const Header = ({cidade}) => {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row',alignItems:'center'}}>   
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.title}>BraizFood</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
          
            <Text style={styles.headerCityName}>{cidade}</Text>
            <Ionicons name="location" size={18} color={cores.branco} />
           
         </View>
    </View>
  )
}

export default Header

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
  