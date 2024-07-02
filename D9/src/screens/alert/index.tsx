import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style'; // Importando estilos do arquivo style.ts

const AlertScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Janeiro'); // Estado para o mês selecionado

  // Dados de exemplo para a FlatList de dias
  const days = [
    { id: 1, day: '1' },
    { id: 2, day: '2' },
    { id: 3, day: '3' },
    { id: 4, day: '4' },
    { id: 5, day: '5' },
    { id: 6, day: '6' },
    { id: 7, day: '7' },
    { id: 8, day: '8' },
    { id: 9, day: '9' },
    { id: 10, day: '10' },
    { id: 11, day: '11' },
    { id: 12, day: '12' },
    { id: 13, day: '13' },
    { id: 14, day: '14' },
    { id: 15, day: '15' },

    // Adicione mais dias conforme necessário
  ];

  // Dados de exemplo para a lista de medicamentos
  const medications = [
    { id: 1, time: '08:00', name: 'Buscopan 200ml', taken: false },
    { id: 2, time: '12:00', name: 'Paracetamol 500mg', taken: true },
    // Adicione mais medicamentos conforme necessário
  ];

  return (
    <View style={styles.container}>
      {/* Seleção de mês */}
      <View style={styles.monthContainer}>
        <Text style={styles.monthText}>{selectedMonth}</Text>
        {/* Aqui você pode implementar a seleção de mês, por exemplo */}
      </View>

      {/* Lista horizontal de dias */}
      <FlatList
        horizontal
        data={days}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dayItem}>
            <Text style={styles.dayText}>{item.day}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Lista de medicamentos */}
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Text style={styles.medicationTime}>{item.time}</Text>
            <Text style={styles.medicationName}>{item.name}</Text>
            {/* Aqui você pode adicionar um controle para marcar se o medicamento foi tomado */}
          </View>
        )}
      />
    </View>
  );
};

export default AlertScreen;
