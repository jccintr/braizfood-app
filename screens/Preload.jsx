import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,Image,StatusBar,Text,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo-branco-250.png';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';
import { useContext } from "react";
import DataContext from '../context/DataContext';
import { cores } from '../style/globalStyle';



const Preload = () => {
  const navigation = useNavigation();
  const [isLoading,setIsLoading] = useState(false);
  const {loggedUser,setLoggedUser,cidade,setCidade,lojas,setLojas} = useContext(DataContext);
  

  useEffect(()=>{
    const getCidade = async () => {
      setIsLoading(true);
      let jsonCidade = await Api.getCidade(1);
      setCidade(jsonCidade);
      setLojas(jsonCidade.lojas);
      setIsLoading(false);
      navigation.reset({
        routes:[{name:'MainTab'}]
      }); 
    }
    getCidade();
  }, []);


/*
useEffect(()=>{

  setTimeout(() => {

    navigation.reset({
      routes:[{name:'MainTab'}]
    });

  }, 2000);

}, []);
  
*/
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
                animated={true}
                backgroundColor={cores.vermelho}
                barStyle="dark-content"
      />
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.text}>Ridery</Text>
      {isLoading&&<ActivityIndicator  size="large" color="#fff"/>}
      
    </SafeAreaView>
  )
}

export default Preload

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cores.vermelho,
      alignItems: 'center',
      justifyContent: 'center',
     },
    logo:{
        height: 150,
        width: 150,
    },
    text: {
      marginTop: 10,
      color: cores.branco,
      fontSize: 30,
      fontWeight: 'bold',
      
    }
  
  }); 