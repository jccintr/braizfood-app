import { StyleSheet, StatusBar, SafeAreaView,Image,View,Text ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { cores } from '../style/globalStyle';
import Api from '../Api';
import { useNavigation } from '@react-navigation/native';
import Fechado from '../components/Fechado';
import Aberto from '../components/Aberto';
import Header2 from '../components/Header2';
import Rate from '../components/Rate';

const Loja = ({route}) => {
  const navigation = useNavigation();
  const {loja} = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={cores.vermelho} barStyle="dark-content"/>
      <Header2 loja={loja} />
      <Image style={styles.cover} source={{uri: `${Api.base_storage}/${loja.cover}`,}}/>
      
      <View style={styles.status}>
        {loja.aberto?<Aberto/>:<Fechado/>}
        <Image style={styles.logotipo} source={{uri: `${Api.base_storage}/${loja.logotipo}`,}}/>
        <Rate value={loja.stars}/>
       
      </View>
     
    </SafeAreaView>
  )
}

export default Loja

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
   },
   cover:{
    height: 200,
    width: '100%',
   },
   logotipo:{
    height: 100,
    width: 100,
    marginTop: -70,
    borderRadius: 20,
   },
   status:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
   
   }
})