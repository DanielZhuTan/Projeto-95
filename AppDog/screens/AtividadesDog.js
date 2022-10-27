import React, { Component } from "react";
import {
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

export default class AtividadesDog extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
          <View style={styles.upperContainer}>
            <Text style={styles.textTitle}>Atividades Diárias</Text>
          </View>





          <View style={styles.imageContainer}>
            <Image style={styles.imageIcon}></Image>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center" 
  },
  upperContainer: { 
    flex: 0.3, 
    justifyContent: "center", 
  }, 
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  imageIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
});