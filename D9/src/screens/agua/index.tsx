import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'; // Importando estilos do arquivo styles.js

const AguaScreen = () => {
  const [consumoAgua, setConsumoAgua] = useState(0);

  const handleMarcaSelecao = (ml: number) => {
    setConsumoAgua(consumoAgua + ml);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Objetivos diários</Text>
      <Text style={styles.consumoAguaText}>{`${consumoAgua}/2000ml`}</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../../img/water.png')} style={styles.icon} />
      </View>
      <View style={styles.selecaoContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(200)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+200ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(400)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+400ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(600)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+600ml</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(800)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+800ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(1000)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+1000ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(1200)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+1200ml</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(1400)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+1400ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(1600)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+1600ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marcaSelecao} onPress={() => handleMarcaSelecao(1800)}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>+1800ml</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AguaScreen;
