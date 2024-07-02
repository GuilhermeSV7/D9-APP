import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style'; // Importando estilos do arquivo styles.js

const iconSize = 100; // Tamanho dos ícones

interface Icon {
  name: string;
  source: any; // Tipo da source conforme necessário
}

const icons: Icon[] = [
  { name: 'Rec', source: require('../../img/rec.png') },
  { name: 'List', source: require('../../img/list.png') },
  { name: 'Contatar', source: require('../../img/contatar.png') },
  { name: 'Agua', source: require('../../img/agua.png') },
  { name: 'Remedio', source: require('../../img/remedio.png') },
  { name: 'Gym', source: require('../../img/gym.png') },
  { name: 'IA', source: require('../../img/IA.png') },
  { name: 'Alert', source: require('../../img/alert.png') },
  { name: 'Parc', source: require('../../img/parc.png') },
];

const Home = () => {
  const navigation = useNavigation();

  const handleIconPress = (screenName: string) => {
    navigation.navigate(screenName as never);
  };

  const renderIcons = () => {
    return icons.map((icon, index) => (
      <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => handleIconPress(icon.name)}>
        <Image source={icon.source} style={styles.icon} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsRow}>
        {renderIcons()}
      </View>
    </View>
  );
};

export default Home;
