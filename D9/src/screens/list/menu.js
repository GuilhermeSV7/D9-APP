import { View, Text, Image, StyleSheet } from "react-native";
import IconTechCare from '../../img/agua.png';
import ContainerNome from "./container.nome";

export default function MenuLateral(){
    return (
        <View style={styles.menu}>
<IconTechCare></IconTechCare>
<ContainerNome nome={'Afonsa'}></ContainerNome>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        alignItems: 'left',
        marginTop: 40,
        maxHeight: 70,
        padding: 10,
    },
});