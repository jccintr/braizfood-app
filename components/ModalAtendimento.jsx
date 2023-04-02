import { StyleSheet, Text, View,Modal,TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import { cores } from '../style/globalStyle';
import { Entypo } from '@expo/vector-icons';

const diaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

const AtendimentoCard = ({atendimento}) => {
   
   
    return (
        <View style={styles.cardAtendimento}>
            <Text style={styles.diaText}>{diaSemana[atendimento.dia]}</Text>
            <Text style={styles.horarioText}>{atendimento.horario}</Text>
    </View>
    )
    
}

const ModalAtendimento = ({modalVisible,setModalVisible,atendimentos}) => {
    const screenWidth = Dimensions.get('window').width;

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
               <TouchableOpacity style={styles.headerArea} onPress={()=>setModalVisible(false)}>
                  <Entypo name="chevron-down" size={34} color={cores.preto} />
                  <Text style={styles.modalTitleText}>Horário de Atendimento</Text>
                </TouchableOpacity>
                <ScrollView style={{width: screenWidth}} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
                    {atendimentos.map((atendimento)=>(
                        <AtendimentoCard key={atendimento.id} atendimento={atendimento}/>
                    ))}
                </ScrollView> 
        </View>
      </View>
    </Modal>
  )
}

export default ModalAtendimento

const styles = StyleSheet.create({

  modalArea:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    },
modalBody:{
    width: '100%',
    height: 330,
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
cardAtendimento:{
  flex:1,  
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90%',
  height: 40,
  borderBottomWidth:1,
  borderBottomColor: cores.fundoSearchfield,
  
  
},
diaText: {
  width: '70%',
  fontSize: 16,
},
horarioText:{
    width: '30%',
    fontSize: 16,
    textAlign: 'right',
    color: cores.verde,
    fontWeight: 'bold',
},


})