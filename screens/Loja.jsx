import { StyleSheet, StatusBar, SafeAreaView,Image,View,Text ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { cores } from '../style/globalStyle';
import Api from '../Api';
import { useNavigation } from '@react-navigation/native';
import Fechado from '../components/Fechado';
import Aberto from '../components/Aberto';
import Header2 from '../components/Header2';
import Rate from '../components/Rate';
import { MaterialIcons,Entypo,AntDesign,FontAwesome } from '@expo/vector-icons';


const Taxas = ()=>{

  return (
     <View style={styles.taxaContainer}>
      <MaterialIcons name="delivery-dining" size={20} color={cores.preto} />
      <Text style={styles.taxaContainerText}>Taxa Entrega</Text>
     </View>
  )
}

const Atendimento = ()=>{

  return (
     <View style={styles.taxaContainer}>
      <FontAwesome name="calendar" size={20} color={cores.preto} />
      <Text style={styles.taxaContainerText}>Atendimento</Text>
     </View>
  )
}

const Pagamentos = ()=>{

  return (
     <View style={styles.taxaContainer}>
      <FontAwesome name="credit-card" size={20} color={cores.preto} />
      <Text style={styles.taxaContainerText}>Pagamento</Text>
     </View>
  )
}




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
      <View style={styles.body}>
          <View style={styles.titleLoja}>
              <Text style={styles.lojaNomeText}>{loja.nome}</Text>
              <View style={styles.secondLineArea}>
                  <Text style={styles.lojaRamoText}>{loja.ramo_atividade}</Text>
                  {loja.aberto&&<><Entypo name="dot-single" size={14} color="black" />
                  <Text style={styles.lojaTempoText}><AntDesign name="clockcircleo" size={14} color="black" /> {loja.tempo}</Text></>}
              </View>
          </View>
          <View style={styles.infoArea}>
             <Taxas/>
             <Pagamentos/>
             <Atendimento/>
          </View>
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
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
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
   
   },
   taxaContainer:{
      width: 100,
      height: 40,
     
      borderColor: cores.preto,
      borderRadius: 5,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
   taxaContainerText:{
     fontSize:12,
     color: cores.preto,
     fontWeight: 'bold',
   },
   titleLoja:{
    width:'100%',
   
   },
   lojaNomeText:{
    fontWeight: 'bold',
    fontSize: 24,
   },
   secondLineArea:{
     marginLeft: 2,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'flex-start',
   },
   lojaRamoText:{
    fontSize: 14,
   },
   lojaTempoText:{
    fontSize: 14,
   },
   infoArea:{
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: cores.fundoSearchfield,
    borderRadius: 5,
   },
   
})