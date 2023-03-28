import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { cores } from '../style/globalStyle'




const BarraTipos = ({tipoSelecionado,setTipoSelecionado}) => {
  const tipos = ['Hamburguerias','Pizzarias','Lanchonetes','Adegas','Restaurantes','Distribuidoras'];
  


  const onTipoPress = (index) => {
     
    setTipoSelecionado(index);
   
 }


  return (
    <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {tipos.map((tipo,index)=>(
              <TouchableOpacity onPress={()=>onTipoPress(index)} key={index} style={tipoSelecionado === index ? styles.tipoContainerSelected : styles.tipoContainer}>
                 <Text style={tipoSelecionado === index ? styles.tipoTextSelected : styles.tipoText}>{tipo}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
        
    </View>
  )
}

export default BarraTipos

const styles = StyleSheet.create({
    container: {
         backgroundColor: cores.vermelho,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
        flexDirection:'row',
        
    },
    tipoContainer: {
       height: 30,
       backgroundColor: '#fe7348',
       borderRadius: 15,
       paddingHorizontal: 10,
       alignItems: 'center',
       justifyContent:'center',
       marginHorizontal: 2,
    },
    tipoText:{
        color: cores.branco,
        fontWeight: 'bold',
    },
    tipoContainerSelected: {
        height: 30,
        backgroundColor: cores.branco,
        borderRadius: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 2,
     },
     tipoTextSelected:{
         color: cores.vermelho,
         fontWeight: 'bold',
     },

})