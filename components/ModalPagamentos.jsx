import { StyleSheet, Text, View,Modal,TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import { cores } from '../style/globalStyle';
import { Entypo } from '@expo/vector-icons';

const PagamentoCard = ({pagamento}) => {
   
   
    return (
        <View style={styles.taxaCardContainer}>
            <Text style={styles.nomeText}>{pagamento.nome}</Text>
            
         </View>
    )
    
}

const ModalPagamentos = ({modalVisible,setModalVisible,pagamentos}) => {
    const screenWidth = Dimensions.get('window').width;

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
               <TouchableOpacity style={styles.headerArea} onPress={()=>setModalVisible(false)}>
                  <Entypo name="chevron-down" size={34} color={cores.preto} />
                  <Text style={styles.modalTitleText}>Formas de Pagamento</Text>
                </TouchableOpacity>
                <ScrollView style={{width: screenWidth}} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
                    {pagamentos.map((pagamento)=>(
                        <PagamentoCard key={pagamento.id} pagamento={pagamento}/>
                    ))}
                </ScrollView> 
        </View>
      </View>
    </Modal>
  )
}

export default ModalPagamentos

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
    color: cores.preto,
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
nomeText: {
  width: '70%',
  fontSize: 16,
},



})