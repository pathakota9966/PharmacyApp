import React, { useContext, useEffect } from 'react';
import AppContext from '../components/ProductContext';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import ListSeperator from '../components/ListSeperator';
import { Products } from './ProductsArray'; 


const ListScreen = ({ navigation }) => {
  /*
  const products =[
    { name: 'Panadol', price: '18.00', imageName: require('../../assets/panadol.png'), description: 'As one of the worlds leading paracetamol-based pain relievers, Panadols clinically-proven products can treat your pain and get you feeling yourself again.' },
    { name: 'Arinac Forte', price: '50.00', imageName: require('../../assets/arinac.png'), description: 'Arinac Forte Tablet is composed of ibuprofen and pseudoephedrine. The tablet acts as a non-steroidal anti-inflammatory drug (NSAID) that controls hormones in the body which cause pain and inflammation. Also works as a decongestant and shrinks the dilated blood vessels to clear nasal congestion' },
    { name: 'Risek 40 Tablet', price: '120.00', imageName: require('../../assets/risek.png'), description: 'Risek contains omeprazole which belongs to the class of proton-pump inhibitors. This class of drugs is the most potent inhibitor of acid secretion from the stomach. Its mechanism of action involves the inhibition of the H/K ATP-ase pump which blocks the production of acid in the stomach.' },
    { name: 'Amoxil 125mg Syrup', price: '128.00', imageName: require('../../assets/amoxil.png'), description: 'Amoxycillin 125mg Syrup is an antibiotic medicine with versatile actions. It can treat a multitude of bacterial infections including those of the ears, eyes, nose, sinus, tonsils, tooth, throat, lungs, skin, gastrointestinal tract, and urinary tract. It may also be effective against peptic ulcer disease.' },
    { name: 'Telfast 120mg', price: '75.00', imageName: require('../../assets/telfast.png'), description: 'Fast, non drowsy 24 hr relief of the symptoms of seasonal hayfever allergies.' },
    { name: 'Coferb Cough Syrup', price: '90.00', imageName: require('../../assets/coferb.png'), description: 'Coferb contains Ivy Leaf extract that relieves cough and congestion. It relieves cough naturally and makes breathing easy. Formulations similar to Coferb have been recognized by international clinical trials endorsing safety and efficacy of the product. Ivy Leaf extract based syrups are widely accepted and used in Europe and USA.' },
    { name: 'ColdAct',  price: '28.00', imageName: require('../../assets/coldact.png'), description: 'Coldact Capsule is a medicine used in the treatment of common cold symptoms. It provides relief from symptoms such as headache, sore throat, runny nose, muscular pain, and fever.' },
    { name: 'Fepanil 250mg', price: '68.00', imageName: require('../../assets/fepanil.png'), description: 'FEPANIL 250 MG SUSPENSION is a widely prescribed medicine that helps to ease pain and bring down high body temperature (fever). In children, it treats conditions like headache, toothache, body ache, fever, and common cold.' },
    { name: 'CEFOLAC', price: '98.00', imageName: require('../../assets/cefolac.jpeg'), description: 'Cefolac 200 Tablet is an antibiotic belonging that is used to treat a variety of bacterial infections. It is effective in infections of the respiratory tract (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and some sexually transmitted diseases.' },
    { name: 'DIZIPEN', price: '118.00', imageName: require('../../assets/digipen.jpeg'), description: 'Digipen Syrup is used as appetite stimulants and helps in digestive disturbance & impaired production of gastric juice. It is used for gastrointestinal purposes as digestive aid, for the treatment of indigestion, flatulence, hyperacidity, bloating, stomach cramps and various other types of digestion related problems.' },
    { name: 'Ascoril LS', price: '118.00', imageName: require('../../assets/acrosills.jpeg'), description: 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus. It thins mucus in the nose, windpipe, and lungs, making it easier to cough out. It also provides relief from runny nose, sneezing, itching, and watery eyes.' },
    { name: 'Ascoril Flu', price: '158.00', imageName: require('../../assets/acrosilflu.jpeg'), description: 'Ascoril Flu Syrup is a combination medicine used in the treatment of common cold symptoms. It relieves allergy symptoms such as runny nose, stuffy nose, sneezing, watery eyes and congestion or stuffiness.' },
  ];
*/
  const {setAuthenticated } = useContext(AppContext);
  
  const loggOut=()=> {
    loggOut();
  }

  return (
    <View>
    <FlatList
      keyExtractor={product => product.name}
      numColumns= {2}
      data={Products}
      columnWrapperStyle={{justifyContent:'space-around' }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', {product: item})}>
          <View style={styles.container}>
            <Image 
            style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 5, borderBottomWidth:1, borderColor: 'gray' }}
            source={item.imageName}
            />
            <ListSeperator />
          <Text style={styles.textStyle}>
            {item.name}
          </Text>
          <Text style={styles.textStyle1}>
            Price Rs. {item.price}
          </Text>
          </View>
          </TouchableOpacity>
        );
      }}
    />
  </View>
        
  );

};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    color: 'rgba(120, 104, 160, 1)',
    fontWeight: 'bold',
    fontSize:15,
    borderTopWidth : 1,
    borderTopColor: 'gray'
  },
  textStyle1: {
    marginVertical: 5,
    color: 'rgba(120, 104, 160, 1)',
    fontWeight: 'bold',
    fontSize: 13
  },
  imageStye: {
    borderRadius: 5,
    borderBottomWidth:1,
    borderColor: 'gray'
  },
  container: {
    borderWidth : 1,
    borderColor: '#C0C0C0',
    backgroundColor: 'rgba(240, 240, 254, 1)',
    borderRadius: 5,
    margin: 15,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
});

export default ListScreen;