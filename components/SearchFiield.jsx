import React from 'react'
import { StyleSheet, View,TextInput,TouchableOpacity} from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { cores } from '../style/globalStyle';


/*

const Icone = ({iconName,iconProvider}) => {
    
    //return <AntDesign name={icon} size={22} color="#c1c1c1" />

    switch (iconProvider) {
        case 'AntDesign':
            return <AntDesign name={iconName} size={22} color="#000" />;
            break;
        case 'FontAwesome':
            return <FontAwesome name={iconName} size={22} color="#000" />;
             break;
       
        default:
          console.log(`icone não encontrado`);
      }
      



}
*/

const SearchField = ( {placeholder, value,setValue,onChangeText} ) => {
  return (
    <View style={styles.inputArea}>
      <FontAwesome name="search" size={22} color={cores.iconeSearchField} />
     <TextInput style={styles.input}
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         placeholderTextColor="#c1c1c1" 
       />
       {value.length>0&&<TouchableOpacity onPress={()=>setValue('')}><AntDesign name="closecircleo" size={22} color={cores.iconeSearchField} /></TouchableOpacity>}
    </View>
  )
}

export default SearchField


const styles = StyleSheet.create({
    inputArea: {
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 30,
        backgroundColor: cores.fundoSearchfield,
        marginHorizontal: 10,
    },
    
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 4,
      color: '#000',
      marginLeft: 10,
      
    },
   
  });