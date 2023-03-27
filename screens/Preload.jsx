import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,Image,StatusBar,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo-branco-250.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';
import { useContext } from "react";
import DataContext from '../context/DataContext';
import { cores } from '../style/globalStyle';



const Preload = () => {
  const navigation = useNavigation();
  //const {loggedUser,setLoggedUser,nomeCidade,setNomeCidade} = useContext(DataContext);
  
/*
  useEffect(()=>{
    const getCityId = async () => {
      const token = await AsyncStorage.getItem('token');
      
        const id = await AsyncStorage.getItem('@cityId');
        const lat = await AsyncStorage.getItem('@userLat');
        const lng  = await AsyncStorage.getItem('@userLng');
       
        if(id) {
          let json = await Api.getCidade(id,lat,lng);
           setNomeCidade(json.nome + ","+json.estado);
           setCity(json);
           setCategorias(json.categorias);
           setSubCategorias(json.subcategorias);
           setServicos(json.servicos);
           
        }
    }
    getCityId();
  }, []);

*/

useEffect(()=>{

  setTimeout(() => {

    navigation.reset({
      routes:[{name:'MainTab'}]
    });

  }, 2000);

}, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
                animated={true}
                backgroundColor={cores.vermelho}
                barStyle="dark-content"
      />
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.text}>Ridery</Text>
     
      
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