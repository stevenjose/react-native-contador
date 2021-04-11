import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    title: string,
    color: string,
    onPress: () => void,
    posicion: 'fabLocationRG' | 'fabLocationLF'

}

export const TouchableOpacityComponent = ( 
    { title, color, onPress, posicion }: Props ) => {

    const styles = StyleSheet.create({
        title: {
            textAlign: 'center',
            fontSize: 45,
            top: -15
        },
        button: {
            backgroundColor:  color ,
            borderRadius: 100,
            width: 60,
            height: 60,
            justifyContent: 'center'
        },
        fabLocationRG: {
            position: 'absolute',
            bottom: 25,
            right: 25,
        },
        fabLocationLF: {
            position: 'absolute',
            bottom: 25,
            left: 25,
        },
        fabText: {
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center'
        }
    
    })

    return (
        <TouchableOpacity
            style={(posicion === 'fabLocationLF') ? styles.fabLocationLF : styles.fabLocationRG }
            onPress={ onPress }
        >
            <View style={styles.button}>
                <Text style={styles.fabText}>
                    { title }
            </Text>
            </View>
        </TouchableOpacity>
    )

    
};


