import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style'; // Importando estilos do arquivo style.ts

const exercises = [
  {
    title: "Caminhada",
    description: "Ajuda a melhorar o humor e a saúde cardiovascular.",
    duration: "Duração: 30-60 minutos.",
    imageUrl: require('../../img/run.png') // Supondo que você tenha uma imagem de caminhada na pasta img
  },
  {
    title: "Yoga",
    description: "Melhora a Consciencia Corporal e Flexibilidade",
    duration: "Duração: 30 minutos.",
    imageUrl: require('../../img/Yoga.png')
  },
  {
    title: "Dança",
    description: "Ajuda a melhorar o Humor e a saude cardiovascular",
    duration: "Duração: 30-60 minutos.",
    imageUrl: require('../../img/dance.png')
  },
  {
    title: "Arte Marcial",
    description: "Melhora a saude cardiovascular",
    duration: "Duração: 30-60 minutos, 3-5vezes por semana.",
    imageUrl: require('../../img/judo.png')
  },
  {
    title: "Ciclismo",
    description: "Melhora a disciplina, a força física e a saúde mental",
    duration: "Duração: 3 vezes por semana.",
    imageUrl: require('../../img/running.png')
  },
  // Adicione mais exercícios conforme necessário
];

const GymScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.card}>
          <Image source={exercise.imageUrl} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{exercise.title}</Text>
            <Text style={styles.description}>{exercise.description}</Text>
            <Text style={styles.duration}>{exercise.duration}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default GymScreen;
