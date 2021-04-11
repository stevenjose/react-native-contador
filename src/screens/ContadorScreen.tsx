import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableOpacityComponent } from '../components/TouchableOpacityComponent';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador : {contador}
            </Text>
            <TouchableOpacityComponent
                title='+1'
                color= 'blue'
                onPress={ () => setContador(contador + 1) }
                posicion='fabLocationRG'
            />
            <TouchableOpacityComponent 
                title='-1'
                color= 'red'
                onPress={ () => setContador(contador - 1) }
                posicion='fabLocationLF'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 45,
        top: -15
    },
    button: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    fabLocationRG:{
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationLF:{
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center'
    }

})