import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,View,ScrollView,StatusBar,Text,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Api';
import { useContext } from "react";
import DataContext from '../context/DataContext';
import { cores } from '../style/globalStyle';
import SearchField from '../components/SearchFiield';
import BarraTipos from '../components/BarraTipos';
import Lojas from '../components/Lojas';



const Home = () => {
  const navigation = useNavigation();
  const [search,setSearch] = useState('');
  const [tipoSelecionado,setTipoSelecionado] = useState(0);
  const {loggedUser,setLoggedUser,cidade,lojas} = useContext(DataContext);
  
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
  const onSearch = (t) => {
     setSearch(t);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
                animated={true}
                backgroundColor={cores.vermelho}
                barStyle="dark-content"
      />
      <Header cidade={cidade.nome}/>
      <BarraTipos tipoSelecionado={tipoSelecionado} setTipoSelecionado={setTipoSelecionado}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
            <SearchField value={search} setValue={setSearch}onChangeText={onSearch} placeholder="Encontre sua loja favorita"/>
            <Lojas lojas={lojas}/>
            
       </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
     },
    body:{
      flex:1,
      width:  Dimensions.get('window').width,
      alignItems:'center',
      justifyContent: 'flex-start',
      
      paddingTop: 10,
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize: 26,
    }
  
  }); 