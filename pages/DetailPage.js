import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function DetailPageswer(){
    const tip = '';
    const popup = () => {
        Alert.alert(tip.date);
    }
    return(
        <ScrollView style={styles.container}>
            <Image style={styles.mainImage} source={{uri:tip.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>popup()}><Text style={styles.buttonText}>팁 찜하기 </Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 10,
    },
    mainImage: {
        marginTop: 40,
        height: 400,
        borderRadius: 20,
        marginBottom: 20,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white'
    },
    desc: {
        padding: 10,
        color: 'white',
        fontSize: 15
    },
    button: {
        marginTop: 20,
        width: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})