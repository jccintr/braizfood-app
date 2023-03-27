import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,View,ScrollView,StatusBar,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';
import { useContext } from "react";
import DataContext from '../context/DataContext';
import { cores } from '../style/globalStyle';



const Search = () => {
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
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
                animated={true}
                backgroundColor={cores.vermelho}
                barStyle="dark-content"
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
            <Text>Search Screen</Text>
       </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
     },
    body:{
      flex:1,
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize: 26,
    }
  
  }); 