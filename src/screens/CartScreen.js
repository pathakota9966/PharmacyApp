import React, {useState, useEffect} from 'react';
import { FlatList, View, Text, Button, Image, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { Products } from './ProductsArray'; 
import ListSeperator from '../components/ListSeperator';

const CartScreen = ({ route, navigation }) => {
    const [product, setProduct] = useState({});
    const cartArray = Products.filter(prod => prod.quantity > 0)
    let sampleProduct = cartArray[0]
    console.log(cartArray)
    let grandTotal = 0
    const [selectedQuantity, setQuantity] = React.useState(0);
    const result = cartArray.reduce((total, currentValue) => total = total + parseFloat(currentValue.price),0);
    console.log(result)

    return (
        <View>
        <FlatList
        keyExtractor={product => product.name}
        data={cartArray}
        renderItem={({ item }) => {
            return (
                <View style={styles.containerStyle}>
                <Image style={{ width: 100, height: 90, marginTop: 5, borderRadius: 5, borderBottomWidth:1, borderColor: 'gray' }} source={item.imageName}/>
                <View style={styles.firstView}>
                <Text>{item.name}</Text>
                <Text>Rs. {item.price}</Text>
                </View>
                <View  style={styles.secondView}>
                    <TouchableOpacity onPress={() => {setQuantity(selectedQuantity > 0 ? selectedQuantity-1 : 0);}}><Image style={{ width: 30, height: 30, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray', marginEnd: 10, marginTop: 2 }} source={require('../../assets/minus.png')}/></TouchableOpacity>
                    <Text style={styles.textStyle4}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => {setQuantity(selectedQuantity+1);}}><Image style={{ width: 35, height: 35, marginBottom: 15, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray', marginStart: 10, marginEnd: 10 }} source={require('../../assets/plus.jpeg')}/></TouchableOpacity>
                </View>
            </View>
            );}
        }
        />
        <ListSeperator/>
        <View  style={styles.lastView}>
            <Text>Total</Text>
            <Text>Rs. {result.toFixed(2)}</Text>
        </View>
        <ListSeperator/>
        <Text style={styles.textStyle5}>Proceed to Check Out</Text>
        </View>
       

    );
}


export default CartScreen

const styles = StyleSheet.create({
    containerStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        backgroundColor: 'rgba(240, 240, 254, 1)',
    },
    firstView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(240, 240, 254, 1)',
        marginVertical: 10,
    },
    secondView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(240, 240, 254, 1)',
        marginVertical: 30,
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textStyle4: {
        marginHorizontal: 5,
        color: 'rgba(120, 104, 160, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5
      },
      textStyle5: {
        marginVertical: 50,
        marginHorizontal: 60,

        color: 'black',
        backgroundColor: 'rgba(120, 104, 160, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 13,
        borderRadius : 10,
        borderColor: 'green',
        width: 250,
        height: 50,
        textAlign: 'center',
      },

});