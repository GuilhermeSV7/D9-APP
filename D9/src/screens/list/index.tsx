import { View, Text } from "react-native";
import Containerlembretes from "./Lembretes";
import MenuLateral from "./menu";
import React from 'react';


export default function List() {
  return (
    <View style={{}}>
    {/*Apaguei aqui <MenuLateral></MenuLateral> */}
    <Text style={{textAlign: 'center', padding: 12, fontSize: 17}}>Alertas Diários</Text>
      <Containerlembretes frase={'Reconheça seus gatilhos agora. Registre seus sentimentos.'}></Containerlembretes>
      <Containerlembretes frase={'Tente água gelada para resistir à compulsão.'}></Containerlembretes>
      <Containerlembretes frase={'Lembre-se dos motivos para melhorar. Você consegue!'}></Containerlembretes>
      <Containerlembretes frase={'Pense nos seus objetivos de saúde. Escolha uma atividade relaxante.'}></Containerlembretes>
      <Containerlembretes frase={'Como você está se sentindo? Reflita e anote seus pensamentos.'}></Containerlembretes>
      <Containerlembretes frase={'Experimente uma fruta fresca como lanche.'}></Containerlembretes>
      <Containerlembretes frase={'Faça um breve passeio ao ar livre.'}></Containerlembretes>
      <Containerlembretes frase={'Bom trabalho hoje! Reflita sobre suas conquistas.'}></Containerlembretes>
    </View>
  );
}