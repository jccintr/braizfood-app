import { StyleSheet, Text, View,Modal,TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import { cores } from '../style/globalStyle';
import { Entypo } from '@expo/vector-icons';

const TaxaCard = ({taxa}) => {
   
   
    return (
        <View style={styles.taxaCardContainer}>
            <Text style={styles.bairroText}>{taxa.bairro}</Text>
            <Text style={styles.valorText}>R$ {taxa.valor}</Text>
    </View>
    )
    
}

const ModalTaxas = ({modalVisible,setModalVisible,taxas}) => {
    const screenWidth = Dimensions.get('window').width;

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
               <TouchableOpacity style={styles.headerArea} onPress={()=>setModalVisible(false)}>
                  <Entypo name="chevron-down" size={34} color={cores.vermelho} />
                  <Text style={styles.modalTitleText}>Taxas de Entrega por Bairros</Text>
                </TouchableOpacity>
                <ScrollView style={{width: screenWidth}} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
                    {taxas.map((taxa)=>(
                        <TaxaCard key={taxa.id} taxa={taxa}/>
                    ))}
                </ScrollView> 
        </View>
      </View>
    </Modal>
  )
}

export default ModalTaxas

const styles = StyleSheet.create({

  modalArea:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    },
modalBody:{
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',  
    justifyContent: 'flex-start',  
    
},
headerArea:{
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 10,
},
modalTitleText:{
    fontWeight: 'bold',
    fontSize: 18,
    color: cores.vermelho,
},
taxaCardContainer:{
  flex:1,  
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90%',
  height: 40,
  borderBottomWidth:1,
  borderBottomColor: cores.fundoSearchfield,
  
  
},
bairroText: {
  width: '70%',
  fontSize: 16,
},
valorText:{
    width: '30%',
    fontSize: 16,
    textAlign: 'right',
    color: cores.verde,
    fontWeight: 'bold',
},


})