import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style'; // Importando estilos do arquivo styles.js

const recommendations = [
  {
    title: "Fruta do dia: Maçã",
    description: "Ricas em fibras e podem ajudar a sentir-se satisfeito por mais tempo.",
    icon: require('../../img/apple.png') // Supondo que você tenha um ícone de maçã na pasta img
  },
  {
    title: "Proteína do dia: ovo",
    description: "Uma excelente fonte de proteína que pode ser preparada de várias maneiras.",
    icon: require('../../img/egg.png')
  },
  {
    title: "Lácteo do dia: Iogurte grego",
    description: "Uma excelente fonte de proteína que pode ser preparada de várias maneiras.",
    icon: require('../../img/ior.png')
  },
  {
    title: "Lanche do dia ",
    description: "Frutas com Manteiga de Amendoim: Combina carboidratos, fibras e gorduras saudáveis",
    icon: require('../../img/mor.png')
  },
  // Adicione mais recomendações conforme necessário
];

const RecScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {recommendations.map((rec, index) => (
        <View key={index} style={styles.recommendationContainer}>
          <Image source={rec.icon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{rec.title}</Text>
            <Text style={styles.description}>{rec.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default RecScreen;
