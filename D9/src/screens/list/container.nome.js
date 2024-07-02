import { View, Text, Image, StyleSheet } from "react-native";

export default function ContainerNome({ nome }){
    return (
        <View style={styles.containerNome}>
            <Text style={styles.textNome}>{nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerNome: {
        alignItems: 'left',
        alignSelf: 'flex-end',
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 8,
        alignContent: 'left',
    },
    textNome: {
        fontFamily: 'notoserif',
        textAlign: 'left',
        fontStyle: 'bold',
        fontSize: 17,
        color: '#007083',
        marginRight: 140,
        marginLeft: 45,
    },
});