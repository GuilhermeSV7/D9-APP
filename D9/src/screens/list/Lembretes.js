import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "../../img/agua.png"; // diretório do icon de ! nos lembretes

export default function Containerlembretes({ frase }){
    return (
        <View style={styles.container}>
            <Image source={Icon} style={styles.icon}/>
            <Text style={styles.text}>{frase}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin: 7,
        minHeight: 65,
        maxHeight: 70,
    },
    text: {
        position: 'relative',
        flex: 1,
        fontFamily: 'notoserif',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 20,
        paddingHorizontal: 40,
    },
    icon: {
        position: 'absolute',
        alignSelf: 'center',
        width: 45,
        height: 45,
        marginRight: 20,
        margin: 15,
        marginHorizontal: 5,
},
});