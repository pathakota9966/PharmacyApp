import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import ListSeperator from '../components/ListSeperator';
const DetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    let quantity = 0;
    const [selectedQuantity, setQuantity] = React.useState(parseInt(product.quantity));
    const [selectedProduct, setProduct] = React.useState(product);

    const updateProduct = () => {
        let prod = product
        prod.quantity = selectedQuantity
        if (selectedQuantity > 0) {
            setProduct(prod);
        }
        console.log(prod.quantity)
      };

    return (
        <View>
        <Image style={{ width: 400, height: 350, marginBottom: 15, borderRadius: 5, borderBottomWidth:1, borderColor: 'gray' }} source={product.imageName}/>
        <View  style={styles.childContainer}>
        <Text style={styles.textStyle}>{product.name}</Text>
        <Text style={styles.textStyle1}>Rs. {product.price}</Text>
        </View>
        <ListSeperator />
        <Text style={styles.textStyle3}>{product.description}</Text>
        <View  style={styles.childContainer}>
        <Text style={styles.textStyle}></Text>
        <Text style={styles.textStyle}>Quantity</Text>
        <TouchableOpacity onPress={() => {setQuantity(selectedQuantity > 0 ? selectedQuantity-1 : 0);}}><Image style={{ width: 30, height: 30, marginBottom: 15, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray' }} source={require('../../assets/minus.png')}/></TouchableOpacity>
        <Text style={styles.textStyle4}>{selectedQuantity}</Text>
        <TouchableOpacity onPress={() => {setQuantity(selectedQuantity+1);}}><Image style={{ width: 35, height: 35, marginBottom: 15, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray' }} source={require('../../assets/plus.jpeg')}/></TouchableOpacity>
        <Text style={styles.textStyle}></Text>
        </View>
        <View style={styles.childContainer1}>
        <Button style={styles.button1} title='Buy Now' onPress={()=>updateProduct} />
        <Button style={styles.button3} title='Add to Cart' onPress={() => navigation.navigate('MyCart')} /> 
        </View>
        </View>


    );
}

export default DetailScreen

const styles = StyleSheet.create({
    textStyle: {
      marginHorizontal: 10,
      color: 'rgba(120, 104, 160, 1)',
      fontWeight: 'bold',
      fontSize:18,
      borderTopWidth : 1,
      borderTopColor: 'gray'
    },
    textStyle1: {
      marginHorizontal: 10,
      color: 'rgba(120, 104, 160, 1)',
      fontWeight: 'bold',
      fontSize: 18,
    },
    textStyle3: {
        marginHorizontal: 10,
        color: 'rgba(120, 104, 160, 1)',
        fontSize: 14,
        paddingVertical: 10
      },
      textStyle4: {
        marginHorizontal: 5,
        color: 'rgba(120, 104, 160, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5
      },
    imageStye: {
      borderRadius: 15,
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
    },
    childContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(240, 240, 254, 1)',
      },
      childContainer1: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(240, 240, 254, 1)',
      },
      button1: {
        backgroundColor: 'rgba(120, 104, 160, 1)',
        fontWeight: 'bold',
        color: 'gray',
        fontSize:18,
        borderRadius: 10,
      },
      button3: {
        backgroundColor: '#00aeef',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 15       
     }
  });
